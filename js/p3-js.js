/*------------------------------------------------
 *	p3-js.js
 *	for Project 3 DWA-15 Fall 2013
 *
 *	Breakfast Calorie Counter
 *	by Shawn Roe
 *	http://p3.kunostories.biz
--------------------------------------------------*/

$(document).ready(function() {

	/*----------------------------------------------------------------------
	Remove button will remove breakfast item from list
	-----------------------------------------------------------------------*/
	$(document).on('click', 'button.remove', function() {
		// add up the total calories
		var totalCalories = parseInt($('#totalCalories').text());
		var foodCalories = parseInt($(this).parent().data('calories'));
		$('#totalCalories').text(totalCalories - foodCalories);

		$(this).parent().remove();
	});


	/*----------------------------------------------------------------------
	Pictures are draggable, adds total calories, and makes breakfast list
	-----------------------------------------------------------------------*/
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

			// if the food item exists, add the serving sizes
			if($('#plate > li:contains(' + contents + ')').length > 0) {
				var currentServingsize = parseFloat($('#plate > li:contains(' + contents + ')').data('serving-size'));
				var newServingsize = parseFloat(currentServingsize + servingsize);
				var currentCalories = parseFloat($('#plate > li:contains(' + contents + ')').data('calories'));
				var newCalories = parseFloat(currentCalories + calories);
				$('#plate > li:contains(' + contents + ')').replaceWith('<li data-calories="' + newCalories + '" data-serving-size="' + newServingsize + '">' + contents + ' (' + newServingsize + ' ' + unit + ') <button class="remove">remove</button></li>');
			}

			// add the food item to the list
			else {
				$('#plate').append('<li data-calories="' + calories + '" data-serving-size="' + servingsize + '">' + contents + ' (' + servingsize + ' ' + unit + ') <button class="remove">remove</button></li>');
			}

			// add up the total calories
			var totalCalories = parseInt($('#totalCalories').text());
			var foodCalories = parseInt(calories);
			$('#totalCalories').text(totalCalories + foodCalories);
		}
	});

	/*----------------------------------------------------------------------
	Fruit section is accordion
	-----------------------------------------------------------------------*/
	$("#food").accordion( {
		active: false,
		collapsible: true,
	    heightStyle: "content"
	});
});