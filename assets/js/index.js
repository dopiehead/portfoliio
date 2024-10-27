

$(document).ready(function() {
    $(".menu-icon").click(function(){

         $(this).toggleClass("close");


         $("#myform").toggleClass("overlayParent");

         $("#myform").css("transition", "0.3s ease-in-out");


    });





$(".open_description").click(function(e) {
    e.preventDefault();
    
    var $this = $(this);
    $this.parent().next().slideToggle();
});





        });


