var elemCnt = 0;
var styleCnt = 0;
var artboardCnt = 0;

var elemMoving = false;

var elemMoved = false;
var elemMovingId = '';
var elemOffset = {
	left: 0,
	top: 0
}
var curArtboardOffset;

$(document).ready(function() {
	// Build Up Views
	InitUI();
	
	// Template Functions show how Elements are created
	// ------------TEMPORARY!!!------------
	TemplateArtboards();
	// ------------TEMPORARY!!!------------
})

document.addEventListener('keydown', function(e){
	if (e.keyCode == 32) {
		InitReadyCanvas();
	}
});

document.addEventListener('keyup', function(e){
	if (e.keyCode == 32) {
		ResetCanvasMovement();
	}
})

document.addEventListener('mousedown', function(e){
	if (e.button == 0) {
		InitClickedCanvas(e);
	}
})

document.addEventListener('mousemove', function(e){
	if (canvasMoving) {
		MoveCanvas(e);
	} else if (elemMoving) {
		$(elemMovingId).css('left', (e.clientX-curArtboardOffset.left-elemOffset.left) + 'px');
		$(elemMovingId).css('top', (e.clientY-curArtboardOffset.top-elemOffset.top) + 'px');
	}
})

document.addEventListener('mouseup', function(e){
	if (e.button == 0) {
		ResetCanvasMovement();
	}
})

$(window).resize(function() {
	// Update Views to current Size
	UpdateUI();
})