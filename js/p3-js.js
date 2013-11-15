/*-------------------------------------------------------------------------------------------------
Get calorie value (title)
-------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	$('#foods').change(function() {
		var foodCalories = parseInt($('#items').val());
		var totalCalories = parseInt($('#totalCalories').text());
		$('#items').prop('selectedIndex',0);
		$('#totalCalories').text(totalCalories + foodCalories);

	});
});
