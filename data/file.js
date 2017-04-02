var data = {
	elements: [

	],
	styles: [

	],
	artboards: [

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
		case 'artboard':
			data.artboards.push(obj);
			artboardCnt = data.artboards.length;
			break;
		default:
			break;
	}
}