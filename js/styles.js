// base class for all styles
var Style = function(name) {
	this.id = styleCnt;
	this.name = name;
	this.attr = {};
	this.Create(this);
}

Style.prototype.Create = function(obj) {
	// add to file
	AddToFile('style', obj);
}

Style.prototype.DefineValue = function(attr, value) {
	// define a single value
	this.attr[attr] = value;
}

Style.prototype.DefineGroup = function(attr) {
	// loop through all attributes supplied
	// and add them to the style object
	for (var at in attr) {
		this.attr[at] = attr[at];
	}
}

Style.prototype.Apply = function(obj) {
	// loop through all attributes of the
	// style and apply them to a DOM-element
	for(var name in this.attr) {
		$(obj.obj).css(name, this.attr[name]);
	}
}