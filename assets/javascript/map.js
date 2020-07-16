let map;
    let infoWindow;
    let infoStorage;

    const districts = {
      'a': {
        label: '1',
        location: {
          lat: 55.26916559,
          lng: 14.752996988
        },
        name: 'Hammeren at Bornholm',
        description: 'Hammeren is a protected area perched on the northernmost part of Bornholm, the beautiful island where Danes usually spend their summer days.'
      },
      'b': {
        label: '2',
        location: {
          lat: 55.6761,
          lng: 12.5683
        },
        name: 'Copenhagen',
        description: "Copenhagen, Denmark’s capital, sits on the coastal islands of Zealand and Amager. It’s linked to Malmo in southern Sweden by the Öresund Bridge. Indre By, the city's historic center, contains Frederiksstaden, an 18th-century rococo district, home to the royal family’s Amalienborg Palace."
      },
      'c': {
        label: '3',
        location: {
          lat: 57.7250,
          lng: 10.5792
        },
        name: 'Skagen',
        description: "Skagen is a port town at the north end of Denmark’s Jutland peninsula. Near the marina, the Skagens Museum exhibits works by the Skagen Painters, who were inspired by the area's light and landscape. The Local History Archive, in the former courthouse, illustrates the town’s history and maritime heritage. On Skagen’s northeastern outskirts, Grenen Beach is at the convergence of the Skagerrak and Kattegat seas."
      },
    };

    function initMap() {
      const localContextMapView = new google.maps.localContext.LocalContextMapView({
        element: document.getElementById('map'),
        placeTypePreferences: ['restaurant', 'tourist_attraction', 'atm', 'bar'],
        maxPlaceCount: 20,
      });

      map = localContextMapView.map;

      map.setOptions({
        center: districts['b'].location,
        zoom: 6,
      });

      // Add 3 custom markers that open InfoWindows on click
      for (const key in districts) {
        let district = districts[key];
        let marker = new google.maps.Marker({
          label: district.label,
          position: district.location,
          map: map,
          zIndex: 30,
        });

        marker.addListener('click', () => {
          // Close any open details or existing InfoWindows
          localContextMapView.hidePlaceDetailsView();
          if (infoWindow) {
            infoWindow.close()
          };

          // Create and open a new InfoWindow
          createInfoWindow(district, marker);

          // Define origin as the selected marker position
          localContextMapView.directionsOptions = {
            origin: district.location,
          };
        });
      };

      // Set the localContextMapView event handlers.
      localContextMapView.addListener('placedetailsviewshowstart', () => {
        infoWindow.close();
      });

      localContextMapView.addListener('placedetailsviewhidestart', () => {
        if (infoStorage) {
          createInfoWindow(infoStorage.district, infoStorage.marker);
        }
      });
    }

    //info window
    function createInfoWindow(district, marker) {
      // Build the content of the InfoWindow
      let contentDiv = document.createElement('div');
      let nameDiv = document.createElement('div');
      let descriptionDiv = document.createTextNode(district.description);
      contentDiv.classList.add('infowindow-content');
      nameDiv.classList.add('title');
      nameDiv.textContent = district.name;
      descriptionDiv.textContent = district.description;
      contentDiv.appendChild(nameDiv);
      contentDiv.appendChild(descriptionDiv);

      // Create and open a new InfoWindow
      infoWindow = new google.maps.InfoWindow();
      infoWindow.setContent(contentDiv);
      infoWindow.open(map, marker);

      // Store key properties of the InfoWindow for future restoration
      infoStorage = {
        'district': district,
        'marker': marker,
      };

      // Clear content storage if infoWindow is closed by the user
      infoWindow.addListener('closeclick', () => {
        if (infoStorage) {
          infoStorage = null;
        }
      });
    }
    