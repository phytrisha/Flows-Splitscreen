var Instance = function() {
	this.pos = {};
	this.parent = 0;
	this.instance = 0;
	this.id = 0;
	this.children = [];
}

Instance.prototype.AppendToDom = function() {

	$('.artboard.selected').append('<div class="element" parent="' +
		this.parent + '" instance="'+
		this.instance + '" id="' +
		this.id +
	'"></div>');

	// Apply Children from Parent
	if (data.elements[this.parent].sub != null) {
		this.ApplyChildren();
	}

	// Apply Style from Parent
	this.ApplyStyleFromParent();

	// Apply Standard Position
	// this.ApplyPositionValueGroup(standardInstancePos);

	$('#' + this.id).on('mousedown', function(e) {
		// elements can now be moved
		elemMoving = true;

		// store the current id as the obj to be moved
		elemMovingId = '#' + this.id;

		elemMovingParent = $(this).attr('parent');
		elemMovingInstance = $(this).attr('instance');
		elemDataMoving = data.elements[elemMovingParent].instances[elemMovingInstance];

		// init the offset of the mouse in relation to the element
		elemOffset.left = e.offsetX;
		elemOffset.top = e.offsetY;

		curArtboardOffset = $(elemMovingId).parent().offset();
	})

	$('#' + this.id).on('mouseup', function() {
		// elements can no longer be moved
		elemMoving = false;

		// clear the id of the moved object
		elemMovingId = '';
	})
}

Instance.prototype.ApplyStyleFromParent = function() {
	for (var name in data.elements[this.parent].style) {
		$('#'+this.id).css(name, data.elements[this.parent].style[name]);
	}
}

Instance.prototype.ApplyChildren = function() {
	// Add the Sub Content of the parent to the Instance
	for (var i = 0; i < data.elements[this.parent].sub.length; i++) {
		this.children.push({
			'type': data.elements[this.parent].sub[i].type,
			'content': data.elements[this.parent].sub[i].content,
			'subId': i
		});
	}

	// Append Children to Dom Object
	for (var i = 0; i < this.children.length; i++) {
		switch(this.children[i].type) {
			case 'Label':
				console.log('Add A Label');
				$('#'+this.id).append('<div class="btnLabel">Label</div>');
				for (var val in data.elements[this.parent].sub[this.children[i].subId].style) {
					$('#' + this.id + ' > .btnLabel').css(val, data.elements[this.parent].sub[this.children[i].subId].style[val]);
				}
				break;
			case 'Icon':
				console.log('Add An Icon');
				break;
			default:
				break;
		}
	}
}

Instance.prototype.ApplyPositionValueGroup = function(target) {
	for (var name in target) {
		$('#'+this.id).css(name, target[name]);
	}
	this.pos = target;
}

Instance.prototype.ApplyPositionValue = function(name, val) {
	console.log('Applying Position Value');
	$('#'+this.id).css(name, val + 'px');
	// this.pos[name] = val + 'px';
}

function UpdateInstances() {
	for (var i = 0; i < data.elements.length; i++) {
		for (var j = 0; j < data.elements[i].instances.length; j++) {
			data.elements[i].instances[j].parent = i;
			data.elements[i].instances[j].instance = j;
			data.elements[i].instances[j].id = 'p'+i+'i'+j;
		}
	}
}