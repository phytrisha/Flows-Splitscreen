var data = {
	elements: [

	],
	styles: [

	]
}

function AddToFile(type, obj) {
	switch (type) {
		case 'element':
			data.elements.push(obj);
			elemCnt = data.elements.length;
			break;
		case 'style':
			data.styles.push(obj);
			styleCnt = data.styles.length;
			break;
		default:
			break;
	}
}