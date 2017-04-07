// Base Class for all Buttons
var Button = function() {
	// All instances of the Class
	this.instances = [];

	// The Style, that is applied to all instances
	this.style = {};

	this.dim = {};

	this.id = elemCnt;

	this.sub = [];
}

Button.prototype.AddChild = function(obj) {
	if (obj != null) {
		this.sub = obj;
	}	
}

Button.prototype.DefineStyle = function(style) {
	$.extend(this.style, style);
	this.ApplyStyleToAllInstances();
	ApplyParentStyleToThumb('par' + this.id, this.id);
}

Button.prototype.DefineDim = function(dim) {
	this.dim = dim;
}

Button.prototype.AddInstance = function(obj) {
	this.instances.push(obj);
	UpdateInstances();
}

Button.prototype.ApplyStyleToAllInstances = function() {
	for (var i = 0; i < this.instances.length; i++) {
		this.instances[i].ApplyStyleFromParent();
	}
}