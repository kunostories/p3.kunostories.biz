/*------------------------------------------------
 *	p3-js.js
 *	for Project 3 DWA-15 Fall 2013
 *
 *	Breakfast Calorie Counter
 *	by Shawn Roe
 *	http://p3.kunostories.biz
--------------------------------------------------*/

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

	int();
});


/*----------------------------------------------------------------------
Attempt to make the app 'mobile' friendly
Code from http://stackoverflow.com/questions/5186441/javascript-drag-and-drop-for-touch-devices
-----------------------------------------------------------------------*/
function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}
