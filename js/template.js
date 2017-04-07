function TEMPLATE() {
	// Create new Classes
	AddToFile('element', new Button());
	AddToFile('element', new Button());
	AddToFile('element', new Button());

	// Define the Style of first Class
	data.elements[0].DefineStyle(standardInstanceStyle);

	// Add Instances to Classes
	data.elements[0].AddInstance(new Instance());
	data.elements[0].AddInstance(new Instance());

	data.elements[1].AddInstance(new Instance());

	data.elements[0].DefineStyleValue('background-color', 'red');
	data.elements[0].DefineStyleValue('border-radius', '50px');

	// Create the Instances of Class
	data.elements[0].instances[0].AppendToDom();
	data.elements[0].instances[1].AppendToDom();

	// Move one Instance
	data.elements[0].instances[1].ApplyPositionValue('left', 200);

	data.elements[1].DefineStyleValue('background-color', 'blue');
	data.elements[1].DefineStyleValue('border-radius', '10px');	

	data.elements[1].instances[0].AppendToDom();
	data.elements[1].instances[0].ApplyPositionValue('top', 100);

	data.elements[1].AddInstance(new Instance());

	data.elements[1].instances[1].AppendToDom();

	data.elements[1].instances[1].ApplyPositionValue('top', 250);
	data.elements[1].instances[1].ApplyPositionValue('left', 250);
}