/*----------------------------------------------------------------------
Pictures are draggable, adds total calories, and makes breakfast list
-----------------------------------------------------------------------*/
$(document).ready(function() {
	var contents = '';
	var calories = '';
	var servingsize = '';
	var unit = '';
	$('img').draggable({
		revert: true,
		helper: "clone",
		start: function() {
			contents = $(this).attr('alt');
			calories = $(this).data('calories');
			servingsize = parseFloat($(this).data('serving-size'));
			unit = $(this).data('unit');
		}
	});

	$('#right').droppable( {
		accept: 'img',
		drop: function() {
			if($('#plate > li:contains(' + contents + ')').length > 0) {
				var currentServingsize = parseFloat($('#plate > li:contains(' + contents + ')').data('serving-size'));
				var newServingsize = parseFloat(currentServingsize + servingsize);
				$('#plate > li:contains(' + contents + ')').replaceWith('<li data-serving-size="' + newServingsize + '">' + contents + ' (' + newServingsize + ' ' + unit + ')</li>');


			}
			else {
				$('#plate').append('<li data-serving-size="' + servingsize + '">' + contents + ' (' + servingsize + ' ' + unit + ')</li>');
			}

			var totalCalories = parseInt($('#totalCalories').text());
			var foodCalories = parseInt(calories);
			$('#totalCalories').text(totalCalories + foodCalories);
		}
	});
});

/*----------------------------------------------------------------------
Fruit section is accordion
-----------------------------------------------------------------------*/
$(document).ready(function() {
	$("#food").accordion( {
		collapsible: true,
	    heightStyle: "content"
	});
});
