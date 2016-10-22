$(document).ready(function(){
	$(".navbar-nav").hide();
	$(".navbar-nav").delay(700).fadeIn(900);

	//Smooth scroll to about section
	$("#aboutScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1100);
});
	//Smooth scroll to project section
$("#projectScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1100);
});
});