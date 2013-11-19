/*---------------------------------------------------------------------
Add up calories from each food item
----------------------------------------------------------------------*/
$(document).ready(function() {
	$('#foods').change(function() {
		var foodCalories = parseInt($('#items').val());
		var totalCalories = parseInt($('#totalCalories').text());
		$('#items').prop('selectedIndex',0);
		$('#totalCalories').text(totalCalories + foodCalories);

	});
});

/*----------------------------------------------------------------------
Pictures are draggable
-----------------------------------------------------------------------*/
$(document).ready(function() {
	var contents = '';
	var calories = '';
	$('.food').draggable({
		revert: true,
		start: function() {
			contents = $(this).attr('title');
			calories = $(this).data('calories');
		}
	});

	$('#canvas').droppable( {
		accept: 'img',
		drop: function() {
			$('#plate').append('<li>' + contents + '</li>');

			var totalCalories = parseInt($('#totalCalories').text());
			var foodCalories = parseInt(calories);
			$('#totalCalories').text(totalCalories + foodCalories);
		}
	});
});