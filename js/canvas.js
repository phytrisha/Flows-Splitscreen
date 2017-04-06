// append the canvas to DOM
function InitCanvas() {
	$('.rightView').append('<div class="canvas"></div>');
}

var canvasMoving = false;
var canvasReadyForMoving = false;

var mouseStart = {
	top: 0,
	left: 0
};

var canvasStart = {
	top: 0,
	left: 0
}

function ResetCanvasMovement() {
	canvasMoving = false;
	canvasReadyForMoving = false;
}

function InitReadyCanvas() {
	canvasReadyForMoving = true;
}

function StoreInitMousePos(e) {
	mouseStart.top = e.clientY;
	mouseStart.left = e.clientX;

	canvasStart.top = parseInt($('.canvas').css('top'));
	canvasStart.left = parseInt($('.canvas').css('left'));
}

function InitClickedCanvas(e) {
	if (canvasReadyForMoving) {
		StoreInitMousePos(e);
		canvasMoving = true;
	}
}

function MoveCanvas(e) {
	var canvasMousePos = {
		top: e.clientY - mouseStart.top,
		left: e.clientX - mouseStart.left
	}
	$('.canvas').css('left', canvasStart.left + canvasMousePos.left + 'px');
	$('.canvas').css('top', canvasStart.top + canvasMousePos.top + 'px');
}