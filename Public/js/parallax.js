(function($) {
	"use strict"; // Start of use strict

	var navbar	= $(document).width() - ($(".navbar").offset().left + $(".navbar").width());
	var navmenu	= $(document).width() - ($(".navbar-nav").offset().left + $(".navbar-nav").width());

	window.addEventListener('resize', function () {
		check_site_width();
	}, true);

	function check_site_width () {
		$(".navbar").removeClass("navbar-collapse").addClass("navbar-expand-md");
		navbar	= $(document).width() - ($(".navbar").offset().left + $(".navbar").width());
		navmenu	= $(document).width() - ($(".navbar-nav").offset().left + $(".navbar-nav").width());
	}

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - 48)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#top-nav',
		offset: 54
	});

	// Collapse the navbar when page is scrolled
	$(window).scroll(function() {

		if (navbar_fits_screen) {

			// Only do this on the index page
			if (window.location.pathname === '/') {

				if (navmenu > navbar) {
					if ($("#top-nav").offset().top > 100) {
						add_shrink_class();
					} else {
						$("#top-nav").removeClass("navbar-shrink");
					}
				}
			}
		}

	});

	window.addEventListener('resize', function () {
		set_shrink_class();
	}, true);

	// Set staticly
	set_shrink_class();

/*
If a member has added too many pages, automatically collapse the menu into the hamburger button
 */

function navbar_fits_screen () {

	// Force the expanded menu because the collapsed one will not overflow the page width
	$(".navbar").removeClass("navbar-collapse").addClass("navbar-expand-md");

	// Get the right positions of the menu and the button
	var navbar	= $(document).width() - ($(".navbar").offset().left + $(".navbar").width());
	var navmenu	= $(document).width() - ($(".navbar-nav").offset().left + $(".navbar-nav").width());

	return navmenu < navbar;
}

function set_shrink_class () {

	if (navbar_fits_screen) {
		if ($("#top-nav").offset().top > 100) {
			add_shrink_class();
		}
		// Show the 'shrunk' navbar on all non-index pages
		if (window.location.pathname !== '/') {
			add_shrink_class();
		}
	} else {
		add_shrink_class();
	}
}

function add_shrink_class () {

	if (!$("#top-nav").hasClass("navbar-shrink")) {
		$("#top-nav").addClass("navbar-shrink");
	}
}

$("#newsletter-signup-submit").on("submit", function () {
	if ($("#newsletter-signup-email").val() === "") {
		alert("You must enter an email address");
		return false;
	}

	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(String($("#newsletter-signup-email").val()).toLowerCase())) {
		alert('The email address you entered was not valid');
		return false;
	}
});

$("#language_switch").on("click", function () {
	document.cookie = "lang=" + $(this).data("lang") + ";path=/";
	window.location.reload();
});

})(jQuery); // End of use strict