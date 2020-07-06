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


var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
