// base class for all topbars
var Topbar = function(name) {

	// Topbar is a child of "Element"
	Element.call(this, elemCnt, name);

	// Initiate the object and append to DOM
	this.obj = this.Create(this);

	this.children = [];

}

// Inherit the Functions of global Element class
Topbar.prototype = Object.create(Element.prototype);
Topbar.prototype.constructor = Topbar;

// Initiate the Topbar as an element
Topbar.prototype.Create = function(obj) {
	// Add Object to File
	AddToFile('element', obj);

	// Append to DOM
	$('.artboard.selected').append('<div class="elem elemTopbar" id="e' + this.id + '"></div>');
	
	// Return unique ID
	return '#e' + this.id;
}