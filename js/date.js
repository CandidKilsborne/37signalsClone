$(document).ready(function() {

	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

	var newDate = new Date();
	newDate.setDate(newDate.getDate() + 1);    
	$('#Date').html("Hello" + " " + dayNames[newDate.getDay()] );

});