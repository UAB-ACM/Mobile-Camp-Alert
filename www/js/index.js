function setAlert() {
	var minutes = parseInt($('#minutes').val());
	var milliseconds = minutes * 60 * 1000;
	setTimeout(function(){alert("Time is up!")}, milliseconds);
}