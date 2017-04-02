
// append the canvas to DOM
function InitCanvas() {
	$('.rightView').append('<div class="canvas"></div>');
}

// var movingCanvas = false;
// var movingCanvasReady = false;

// // check for key interaction
// $(document).ready(function() {
// 	window.setTimeout(function() {
// 		$('.rightView').on('mouseover', function() {
// 			movingCanvasReady = true;
// 		})

// 		$('.rightView').on('mouseout', function() {
// 			movingCanvasReady = false;
// 		})
// 	}, 10)

// 	$('body').keypress(function(e) {

// 		if (e.keyCode == 65 && movingCanvasReady) {
// 			movingCanvas = true;
// 			MoveCanvas(e);
// 		}
// 		e.stopPropagation();
// 		e.preventDefault();
// 		return false;

// 	});
// })

// function MoveCanvas(e) {
// 	console.log('Move the Canvas');
// 	$('.rightView').css('cursor', 'move');
// }