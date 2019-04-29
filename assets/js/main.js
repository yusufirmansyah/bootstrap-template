$("document").ready(function() {
	var typed = new Typed("#typed", {
		strings: ["web designer", "web developer", "freelancer"],
		backSpeed: 80,
		typeSpeed: 100,
		loop: true
	});
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$("nav").toggleClass("scrolled", wScroll > 2);

	$(".hero").css({
		transform: "translate(0px, " + wScroll / 2.5 + "%)"
	});
});
