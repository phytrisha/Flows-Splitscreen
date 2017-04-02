var Artboard = function(name, type) {
	this.id = artboardCnt;
	this.name = name;

	this.dim = {
		// the dimensions come in here (left, top, width and height)
	}

	this.type = type;
	this.obj = this.Create(this);
}

Artboard.prototype.Create = function(obj) {
	// Add Artboard to File
	AddToFile('artboard', obj);

	// Append to DOM
	$('.canvas').append('<div class="artboard '+this.type+'" id="a' + this.id + '"></div>');
	
	// ------------TEMPORARY!!!------------
	// UpdateCanvas();
	// ------------TEMPORARY!!!------------

	return '#a' + this.id;
}

Artboard.prototype.Select = function() {
	$(this.obj).addClass('selected');
}

Artboard.prototype.SetPosition = function (val) {
	this.dim = val;
	this.ApplyTransform();
}

// change a specific position value
Artboard.prototype.SetPositionValue = function(attr, val) {
	this.dim[attr] = val;
	this.ApplyTransform();
}

// apply position properties to DOM element
Artboard.prototype.ApplyTransform = function() {
	for (var i = 0; i < placement.length; i++) {
		$(this.obj).css(placement[i], this.dim[placement[i]]);
	}
}