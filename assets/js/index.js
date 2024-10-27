

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






            $('#work').on('click', function() {
                $('html, body').animate({
                    scrollTop: $('#skills').offset().top
                }, 1000); 
                
                $("#myform").hide();  

            });
         
            $('#experience').on('click', function() {
                $('html, body').animate({
                    scrollTop: $('#companies').offset().top
                }, 1000);

                $("#myform").hide();  
            });

            
            $('.contact').on('click', function() {
                $('html, body').animate({
                    scrollTop: $('#contact').offset().top
                }, 1000);

                $("#myform").hide();  
            });




        });


