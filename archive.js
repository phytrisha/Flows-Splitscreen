// EVERYTHING THAT IS ON HOLD:

	// -------------------- ON HOLD --------------------
	// THIS FUNCTION IS CURRENTLY NOT REQUIRED
	// -------------------- ON HOLD --------------------

// update the canvas, if positional changes to elements
// or artboards have been made
function UpdateCanvas() {
	// -------------------- GOAL --------------------
	// collect total size of canvas, by gathering all
	// artboards and combining their width and height
	// and including left and top positions of them

	// store all artboards in one array
	var artboards = $($('.canvas').children('.artboard'));

	// final variable for target dimensions of canvas
	var totalDim = {
		position: {
			'left': 0,
			'top': 0
		},
		size: {
			'width': 0,
			'height': 0
		}
	}

	// reference for next dimension check
	var previousDim = {
		position: {
			'left': 0,
			'top': 0
		},
		size: {
			'width': 0,
			'height': 0
		}
	}

	for (var i = 0; i < artboards.length; i++) {
		// current artboards dimensions
		var currentDim = {
			position: {
				'left': parseInt($(artboards[i]).css('left')),
				'top': parseInt($(artboards[i]).css('top'))	
			},
			size: {
				'width': parseInt($(artboards[i]).css('width')),
				'height': parseInt($(artboards[i]).css('height'))
			}
		}
		
		// check for lower values
		if (currentDim.position.left < previousDim.position.left) {
			previousDim.position.left = currentDim.position.left;
			console.log('new max left recognized');
		}

		if (currentDim.position.top < previousDim.position.top) {
			previousDim.position.top = currentDim.position.top;
			console.log('new max top recognized');
		}

		if (i == artboards.length - 1) {
			totalDim.position = previousDim.position;
			console.log(totalDim);
		}
	}

	// combine the width and height of all artboards
	for (var i = 0; i < artboards.length; i++) {
		totalDim.width += parseInt($(artboards[i]).css('width'));
		totalDim.height += parseInt($(artboards[i]).css('height'));
	}

	// apply the final dimensions to the Canvas DOM object
	for (attr in totalDim) {
		$('.canvas').css(attr, totalDim[attr] + 'px');
	}

}