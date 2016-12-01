
// ----- Scroll Top -----//
var scrollNav = $('#ScrollNav');
var link = $('.link1');
$(window).scroll(function(){

	scroll = $(window).scrollTop();



	if(scroll > 400) {
		scrollNav.addClass('scrollActive');
		link.addClass('linkActive');
	} else {
		scrollNav.removeClass('scrollActive');
		link.removeClass('linkActive');

	}	
});

 // ----HAMBURGER ----//
 
 $('.nav-btn').click(function(){
 	$('.nav-btn').toggleClass('active');
 	$('.navigation').toggleClass('active');
 });





 // ---- Scroll Anhors --- //



$(document).ready(function(){

    $("#ScrollNav").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);

    });

});


// ----- TOP to Back ---- //

$(document).ready(function(){

        		// hide #back-top first
		        $("#back-top").hide();

        		// fade in #back-top
        		$(function () {
                	$(window).scroll(function () {
                    	if ($(this).scrollTop() > 800) {
                        		$('#back-top').fadeIn();
                        } else {
                                $('#back-top').fadeOut();
                        }
                });
                // scroll body to 0px on click
                $('#back-top a').click(function () {
                        $('body,html').animate({
                                scrollTop: 0
                        }, 600);
                        return false;
                });
       		 });
		});		