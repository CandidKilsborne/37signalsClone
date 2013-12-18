$(document).ready(function() {

	$('#options #basecamp').mouseenter(function() {
		$('.one').removeClass('hidden');
	});
	$('#options #basecamp').mouseleave(function() {
		$('.one').addClass('hidden');
	});

	$('#options #highrise').mouseenter(function() {
		$('.two').removeClass('hidden');
	});
	$('#options #highrise').mouseleave(function() {
		$('.two').addClass('hidden');
	});

	$('#options #campfire').mouseenter(function() {
		$('.three').removeClass('hidden');
	});
	$('#options #campfire').mouseleave(function() {
		$('.three').addClass('hidden');
	});

});