$(document).ready(function(){


	//Smooth scroll to about section
	$("#aboutScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1100);
    return false;
	});
	
	//Smooth scroll to project section
	$("#projectScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1100);
    return false;
	});

});