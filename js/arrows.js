$(document).ready(function() {

	$('#basecamp').mouseenter(function() {
		$('.one').removeClass('hidden');
	});
	$('#basecamp').mouseleave(function() {
		$('.one').addClass('hidden');
	});

	$('#highrise').mouseenter(function() {
		$('.two').removeClass('hidden');
	});
	$('#highrise').mouseleave(function() {
		$('.two').addClass('hidden');
	});

	$('#campfire').mouseenter(function() {
		$('.three').removeClass('hidden');
	});
	$('#campfire').mouseleave(function() {
		$('.three').addClass('hidden');
	});

});