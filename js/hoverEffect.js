$(document).ready(function() {
	
	$("#options  #basecamp").hover(
		function() { $('h1').html('<a href="#">Basecamp</a> is the project management tool you wish you had on your last project.'); },
		function() { $('h1').html('Making collaboration productive and enjoyable for people every day.'); }
	);
	$("#options  #basecamp").hover(
		function() { $('h2').text("Are you still managing projects with email? Are you still using Excel for your to-do lists? It's to upgrade to basecamp. Manage projects and collaborate with your team and clients the modern way."); },
		function() { $('h2').text("Frustration-free web-based apps for collaboration, sharing information, and making decisions."); }
	);

	$("#options #highrise").hover(
		function() { $('h1').html('<a href="#">Highrise</a> remembers the important things about people youd normally forget.'); },
		function() { $('h1').html('Making collaboration productive and enjoyable for people every day.'); }
	);
	$("#options #highrise").hover(
		function() { $('h2').text("Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise."); },
		function() { $('h2').text("Frustration-free web-based apps for collaboration, sharing information, and making decisions."); }
	);

	$("#options #campfire").hover(
		function() { $('h1').html('From near or far, <a href="#">Campfire</a> helps teams work together over the web in real-time.'); },
		function() { $('h1').html('Making collaboration productive and enjoyable for people every day.'); }
	);
	$("#options #campfire").hover(
		function() { $('h2').text("Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in real-time private chat room. It's game changing. We couldn't run our own business without Campfire."); },
		function() { $('h2').text("Frustration-free web-based apps for collaboration, sharing information, and making decisions."); }
	);

});