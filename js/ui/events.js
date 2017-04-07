var elemMoving = false;
var elemMoved = false;
var elemMovingId = '';
var elemOffset = {
	left: 0,
	top: 0
}
var elemMovingParent = 0;
var elemMovingInstance = 0;
var elemDataMoving = {};

var curArtboardOffset;

document.addEventListener('keydown', function(e){
	if (e.keyCode == 32) {
		InitReadyCanvas();
	}
});

document.addEventListener('keyup', function(e){
	if (e.keyCode == 32) {
		ResetCanvasMovement();
	}
	if (e.keyCode == 68) {
		console.log('-------------------- STEP -----------------');
		console.log(data);
		console.log('-------------------------------------------');
	}
	// Demo for Applying Styles
	if (e.keyCode == 49) {
		// console.log(data.elements[0]);
		data.elements[0].DefineStyle({'box-shadow': '10px 10px 5px 0px rgba(0,0,0,0.75)'});
	}
	if (e.keyCode == 50) {
		data.elements[1].DefineStyle({'border-radius': '0px'});
	}
	if (e.keyCode == 76) {
		console.log(lib);
	}
})

document.addEventListener('mousedown', function(e){
	if (e.button == 0) {
		InitClickedCanvas(e);
		if (elemMoving) {
			SelectElement('#' + elemDataMoving.id);	
			console.log(elemDataMoving.id);		
		}
	}
})

document.addEventListener('mousemove', function(e){
	if (canvasMoving) {
		MoveCanvas(e);
	} else if (elemMoving) {
		var toPos = {
			'left': e.clientX-curArtboardOffset.left-elemOffset.left + 'px',
			'top': e.clientY-curArtboardOffset.top-elemOffset.top + 'px',
			'width': $(elemMovingId).css('width'),
			'height': $(elemMovingId).css('height')
		}
		elemDataMoving.ApplyPositionValueGroup(toPos);
	}
})

document.addEventListener('mouseup', function(e){
	if (e.button == 0) {
		ResetCanvasMovement();
	}
})