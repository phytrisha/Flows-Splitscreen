// base class for all buttons
var Button = function(name) {

	// Button is a child of "Element"
	Element.call(this, elemCnt, name);

	// Initiate the object and append to DOM
	this.obj = this.Create(this);

	this.children = [];

	this.selected = false;

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
	
	// Return unique ID
	return '#e' + this.id;
}

Button.prototype.Select = function() {
	this.selected = true;
}