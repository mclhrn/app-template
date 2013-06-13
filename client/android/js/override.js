/*---------------------
 * Android OverRides
 *
 *--------------------
 */

/*
 * Handle ":active" selector not working
 * on Android webKit on 'li' elements
 */

// $(".btn")
// 	.bind("touchstart", function () {
// 		$(this).addClass("fake-active");
// 	})
// 	.bind("touchend", function() {
// 		$(this).removeClass("fake-active");
// 	})
// 	.bind("touchcancel", function() {
// 		$(this).removeClass("fake-active");
// 	});

$(".btn")
	.bind("mousedown", function () {
		$(this).addClass("fake-active");
	})
	.bind("mouseup", function() {
		$(this).removeClass("fake-active");
	})
	.bind("touchcancel", function() {
		$(this).removeClass("fake-active");
	});