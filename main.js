var elemCnt = 0;
var styleCnt = 0;
var artboardCnt = 0;

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

document.addEventListener('mousedown', function(e){
	if (e.button == 0) {
		InitClickedCanvas(e);
	}
})

document.addEventListener('mousemove', function(e){
	if (canvasMoving) {
		MoveCanvas(e);
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