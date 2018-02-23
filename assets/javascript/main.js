$(document).ready(function() {
	$(".menu-icon").on("click", function() {
		$("nav ul").toggleClass("showing");
		$('.logo a').css({"color": "#fff"})
	});
});

$(window).on("scroll", function() {
	if($(window).scrollTop()) {
		$('nav').addClass('green');
		$('.logo a').css({"color": "#fff"})
		$('nav ul').css({"color": "#fff"})
		$('nav a').css({"color": "#fff"})
	}
	else {
		$('nav').removeClass('green');
		$('.logo a').css({"color": "#000"})
		$('nav ul').css({"color": "#000"})
		$('nav a').css({"color": "#000"})
	}
})