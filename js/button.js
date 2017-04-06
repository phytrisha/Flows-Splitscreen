// base class for all buttons
var Button = function(name) {

	// Button is a child of "Element"
	Element.call(this, elemCnt, name);

	// Initiate the object and append to DOM
	this.obj = this.Create(this);

	this.children = [];

	this.moveable = false;

	this.selected = false;

	this.style = {};

}

// Inherit the Functions of global Element class
Button.prototype = Object.create(Element.prototype);
Button.prototype.constructor = Button;

// Initiate the Topbar as an element
Button.prototype.Create = function(obj) {
	// Add Object to File
	AddToFile('element', obj);

	// Append to DOM
	$('.artboard.selected').append('<div class="elem elemButton" id="e' + this.id + '"></div>');

	// select the object
	$('#e' + this.id).on('mousedown', function(e) {
		// elements can now be moved
		elemMoving = true;

		// store the current id as the obj to be moved
		elemMovingId = '#' + this.id;

		// init the offset of the mouse in relation to the element
		elemOffset.left = e.offsetX;
		elemOffset.top = e.offsetY;

		curArtboardOffset = $(elemMovingId).parent().offset();

		
	})

	$('#e' + this.id).on('mouseup', function() {
		// elements can no longer be moved
		elemMoving = false;

		// clear the id of the moved object
		elemMovingId = '';

		// select functions (WIP)
		if (!obj.selected) {
			obj.Select();;
		}
	})
	
	// Return unique ID
	return '#e' + this.id;
}

Button.prototype.Select = function() {
	this.selected = true;
	TriggerEditor(this);
}

Button.prototype.AppendToInstancesView = function() {

	$('.instancesView').append('<div class="instancedElementCell" id="incElemCell'+this.id+'"></div>');

	$('#incElemCell'+this.id).append('<div class="instancedElementThumb" id="incElemThumb'+this.id+'"></div>');
	$('#incElemCell'+this.id).append('<div class="instancedElementTitle" id="incElemTitle'+this.id+'"><h3>'+this.name+'</h3></div>');
	$('#incElemCell'+this.id).append('<div class="instancedElementAdd" id="incElemAdd'+this.id+'"></div>');

	for (var name in this.style) {
		$('#incElemThumb'+this.id).css(name, this.style[name]);
	}

	$('#incElemThumb'+this.id).css('width', presetsInstanced.button.width);
	$('#incElemThumb'+this.id).css('height', presetsInstanced.button.height);
}
















