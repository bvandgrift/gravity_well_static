$(document).ready(function() {
	$('.top-bar-section .right').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 250,
		scrollOffset: 0,
		scrollThreshold: 0.1,
		filter: '',
		easing: 'swing',
		begin: function() {
			//I get fired when the animation is starting
		},
		end: function() {
			//I get fired when the animation is ending
		},
		scrollChange: function($currentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		}
	});

	$('.headline').flexVerticalCenter();

});

$(document).foundation();

$('#home-slider').on('orbit:ready', function(event) {
	$('.headline').fadeIn();
});

$('#home-slider').on('orbit:before-slide-change', function(event, orbit) {
	$('.headline').fadeOut();
});

$('#home-slider').on('orbit:after-slide-change', function(event, orbit) {
	$('.headline').fadeIn();
});