// global position property labels
var placement = ['left', 'top', 'width', 'height'];

// base class for all elements
var Element = function(id, name) {
	this.id = id;
	this.name = name;
	this.dim = {
		// the dimensions come in here (left, top, width and height)
	}
}

// apply position properties to DOM element
Element.prototype.ApplyTransform = function() {
	for (var i = 0; i < placement.length; i++) {
		$(this.obj).css(placement[i], this.dim[placement[i]]);
	}
}

// change all position values at once
Element.prototype.SetPosition = function(val) {
	this.dim = val;
	this.ApplyTransform();
}

// change a specific position value
Element.prototype.SetPositionValue = function(attr, val) {
	this.dim[attr] = val;
	this.ApplyTransform();
}