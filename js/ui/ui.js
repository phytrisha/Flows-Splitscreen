function InitUi() {
	UpdateUi();
	InitLibrary();
	InitEditor();
}

function UpdateUi() {
	$('.contentView').css('height', window.innerHeight - 68 + 'px');
	$('.editorUi').css('top', window.innerHeight - 388 + 'px');
}

function InitLibrary() {
	// Go through all categories in the library
	for (var i = 0; i < lib.length; i++) {
		// Go through all presets of the current category
		for (var j = 0; j < lib[i].length; j++) {
			// Add a new element with appropriate properties for category and preset
			$('.libraryView > .contentSection').append(
				'<div class="libElement" category="'+i+'" preset="'+j+'" id="'+lib[i][j].name+'"></div>'
			);
			// if second element, add a line break
			if (j%2!=0) {
				$('#' + lib[i][j].name).addClass('lineBreak');
			}
			// Add Label for Preset
			$('#' + lib[i][j].name).html('<h3>' + lib[i][j].label + '</h3>');
			// Add Preview-Image for Preset
			$('#' + lib[i][j].name).css('background-image', 'url(img/Library/' + lib[i][j].img + ')');
			// Add Click Effect for Image
			$('#' + lib[i][j].name).append('<div class="libElementClicked"></div>');
		}
	}

	$('.libElement').click(function() {
		// Store Category and Preset in Local Variables
		var category = $(this).attr('category');
		var preset = $(this).attr('preset');

		// Add A new Class to the File
		AddToFile('element', new Button());

		// Shorthand Variable
		var currentElement = data.elements[elemCnt - 1];
		// Check for Content, if True, place it inside the object
		currentElement.AddChild(lib[category][preset].content);
		// Get the Style for the Preset from the Library
		currentElement.DefineStyle(lib[category][preset].style);
		// Create a new Instance of the Class
		currentElement.AddInstance(new Instance());
		// Append the new Instance to DOM
		currentElement.instances[currentElement.instances.length - 1].AppendToDom();
		// Apply Dimensions of Preset to Instance
		currentElement.instances[currentElement.instances.length - 1].ApplyPositionValueGroup(lib[category][preset].dim);
		// Append the Class to used Classes
		AddToUsed(category, preset, elemCnt - 1);
	})
}

function ApplyParentStyleToThumb(id, parent) {
	id = '#thumb_' + id;
	var sourceStyle = data.elements[parent].style;
	for (var attr in sourceStyle) {
		$(id).css(attr, sourceStyle[attr]);
	}
}

function AddToUsed(category, preset, parent) {
	var instancesViewId = 'par' + parent; 
	// Add Cell to Used View
	$('.instancesView').append(
		'<div class="instancedElementCell" parent="'+parent+'" id="'+instancesViewId+'"></div>'
	);

	// Add Thumbnail to Cell
	$('#' + instancesViewId).append(
		'<div class="instancedElementThumb" id="thumb_'+instancesViewId+'"></div>'
	);

	// Add Title to Cell
	$('#' + instancesViewId).append(
		'<div class="instancedElementTitle"><h3>' + lib[category][preset].label + ' ' + elemCnt + '</h3></div>'
	);

	// Standard Dimensions for Thumbnail
	$('#thumb_' + instancesViewId).css('width', '80px');
	$('#thumb_' + instancesViewId).css('height', '30px');

	ApplyParentStyleToThumb(instancesViewId, parent);

	// IMPORTANT: Add Click Event to ID (not class!), else it will be applied multiple Times!
	$('#' + instancesViewId).click(function() {
		// Get properties from DOM Object
		var parent = $(this).attr('parent');
		// Shorthand Variable
		var target = data.elements[parent];
		// Add a new Instance to Class
		target.AddInstance(new Instance());
		// Append the new instance to the DOM
		target.instances[target.instances.length - 1].AppendToDom();
		// Apply Standard Dimensions
		target.instances[target.instances.length - 1].ApplyPositionValueGroup(lib[category][preset].dim);
	})
}





















