// Template for Element Creation
function TemplateButton() {

	// Create a new Button
	var myButton = new Button('MyButton');

	// Create a new Style
	var myButtonStyle = new Style('MyButtonStyle');

	// Save the Style Attributes as a variable
	var myButtonStyleAttributes = {
		'background-color': '#AA00FF',
		'box-shadow': '0px 2px 12px 0px rgba(0,0,0,0.25)',
		'border-radius': '20px'
	}

	// Define the Style with this variable
	myButtonStyle.DefineGroup(myButtonStyleAttributes);

	// Apply the Style to the Button
	myButtonStyle.Apply(myButton);

	// Save the position as a new variable
	var myButtonDim = {
		'left': '50px',
		'top': '100px',
		'width': '160px',
		'height': '40px'
	}

	// Define the position with this variable
	myButton.SetPosition(myButtonDim);

	// ----------------- Short Version: ------------------
	// 
	// var myButton = new Button('MyButton');
	// var myButtonStyle = new Style('MyButtonStyle');
	// var myButtonStyleAttributes = {
	// 	'background-color': '#AA00FF',
	// 	'box-shadow': '0px 2px 12px 0px rgba(0,0,0,0.25)',
	// 	'border-radius': '20px'
	// }
	// myButtonStyle.DefineGroup(myButtonStyleAttributes);
	// myButtonStyle.Apply(myButton);
	// var myButtonDim = {
	// 	'left': '50px',
	// 	'top': '100px',
	// 	'width': '160px',
	// 	'height': '40px'
	// }
	// myButton.SetPosition(myButtonDim);
	// 
	// ---------------------------------------------------
}

function TemplateTopbar() {

	// Create a new Topbar
	var myTopbar = new Topbar('MyTopbar');

	// Create a new Style
	var myStyle = new Style('MyStyle');

	// Save the Style Attributes as a variable
	var myStyleAttributes = {
		'border-bottom': '1px solid #000000',
		'background-color': '#FFFFFF'
	}

	// Define the Style with this variable
	myStyle.DefineGroup(myStyleAttributes);

	// Define a single Style-value
	myStyle.DefineValue('box-shadow', '0px 2px 4px 0px rgba(0,0,0,0.25)');

	// Apply the Style to the Topbar
	myStyle.Apply(myTopbar);

	// Save the position as a new variable
	var myTopbarDim = {
		'left': '0px',
		'top': '0px',
		'width': '100%',
		'height': '66px'
	}

	// Define the position with this variable
	myTopbar.SetPosition(myTopbarDim);

	// Change one value of the Position
	myTopbar.SetPositionValue('width', '50%');
}

function TemplateArtboards() {
	var myArtboard = new Artboard('myArtboard', 'iPhone7');
	myArtboard.Select();

	myArtboard.SetPositionValue('left', '200px');
	myArtboard.SetPositionValue('top', '100px');
}