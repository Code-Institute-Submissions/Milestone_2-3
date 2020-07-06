//Button Color Transitions//
$("#head_btn").mouseenter(function(){
        $(this).css('background-color', 'white');
        $(this).css('color', 'black');
        $(this).css('font-weight', 'bold');
        
    });

$("#head_btn").mouseleave(function(){
       $(this).css('background-color', 'transparent');
       $(this).css('color', 'white');
    });




$(".outline_ind").mouseenter(function(){
        $(this).css('background-color', 'white');
        $(this).css('color', 'black');
        $(this).css('font-weight', 'bold');
        
    });

$(".outline_ind").mouseleave(function(){
       $(this).css('background-color', 'black');
       $(this).css('color', 'white');
    });


// Water Photo Gallery Transitions
$("#water_btn").click(function(){
    $("#gal_one").html('<img class="gallery-image" src="assets/images/g3_img_1.jpg" alt"">');
    $("#gal_two").html('<img class="gallery-image" src="assets/images/g3_img_2.jpg" alt"">');
    $("#gal_three").html('<img class="gallery-image" src="assets/images/g3_img_3.jpg" alt"">');
    $("#gal_four").html('<img class="gallery-image" src="assets/images/g3_img_4.jpg" alt"">');
    $("#gal_five").html('<img class="gallery-image" src="assets/images/g3_img_5.jpg" alt"">');
    $("#gal_six").html('<img class="gallery-image" src="assets/images/g3_img_6.jpg" alt"">');
    $("#gal_seven").html('<img class="gallery-image" src="assets/images/g3_img_7.jpg" alt"">');
    $("#gal_eight").html('<img class="gallery-image" src="assets/images/g3_img_8.jpg" alt"">');
    $("#gal_nine").html('<img class="gallery-image" src="assets/images/g3_img_9.jpg" alt"">');
});

// Nature Photo Gallery Transitions
$("#nature_btn").click(function(){
    $("#gal_one").html('<img class="gallery-image" src="assets/images/g2_image_1.jpg" alt"">');
    $("#gal_two").html('<img class="gallery-image" src="assets/images/g2_image_2.jpg" alt"">');
    $("#gal_three").html('<img class="gallery-image" src="assets/images/g2_image_3.jpg" alt"">');
    $("#gal_four").html('<img class="gallery-image" src="assets/images/g2_image_4.jpg" alt"">');
    $("#gal_five").html('<img class="gallery-image" src="assets/images/g2_image_5.jpg" alt"">');
    $("#gal_six").html('<img class="gallery-image" src="assets/images/g2_image_6.jpg" alt"">');
    $("#gal_seven").html('<img class="gallery-image" src="assets/images/g2_image_7.jpg" alt"">');
    $("#gal_eight").html('<img class="gallery-image" src="assets/images/g2_image_8.jpg" alt"">');
    $("#gal_nine").html('<img class="gallery-image" src="assets/images/g2_image_9.jpg" alt"">');
});


// Creative Photo Gallery Transitions
$("#creative_btn").click(function(){
    $("#gal_one").html('<img class="gallery-image" src="assets/images/g1_image_1.jpg" alt"">');
    $("#gal_two").html('<img class="gallery-image" src="assets/images/g1_image_2.jpg" alt"">');
    $("#gal_three").html('<img class="gallery-image" src="assets/images/g1_image_3.jpg" alt"">');
    $("#gal_four").html('<img class="gallery-image" src="assets/images/g1_image_4.jpg" alt"">');
    $("#gal_five").html('<img class="gallery-image" src="assets/images/g1_image_5.jpg" alt"">');
    $("#gal_six").html('<img class="gallery-image" src="assets/images/g1_image_6.jpg" alt"">');
    $("#gal_seven").html('<img class="gallery-image" src="assets/images/g1_image_7.jpg" alt"">');
    $("#gal_eight").html('<img class="gallery-image" src="assets/images/g1_image_8.jpg" alt"">');
    $("#gal_nine").html('<img class="gallery-image" src="assets/images/g1_image_9.jpg" alt"">');
});

  


var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
