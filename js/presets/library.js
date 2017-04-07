var lib = [
	buttons = [
		TextButton_Background = {
			name: "TextButton_Background",
			label: "Text & Background",
			img: "Buttons/01_TextBackgroundButton.png",
			style: {
				"background-color": "#4E94FB",
				"border-radius": "5px"
			},
			dim: {
				'left': '10px',
				'top': '10px',
				'width': '150px',
				'height': '39px'
			},
			content: [
				{
					'type':'Label',
					'content':'Button Label',
					'style': {
						'font-family': 'SF UI Display',
						'font-size': '14px',
						'text-align': 'center'
					}
				},
				{
					'type':'Icon',
					'content':'SampleIcon'
				}
			]
		},
		TextButton = {
			name: "TextButton",
			label: "Text",
			img: "Buttons/02_TextButton.png",
			style: {
				"background-color": "#AA00FF",
				"box-shadow": "0px 2px 12px 0px rgba(0,0,0,0.25)",
				"border-radius": "20px"
			},
			dim: {
				'left': '10px',
				'top': '10px',
				'width': '150px',
				'height': '39px'
			},
		},
		IconButton_Background = {
			name: "IconButton_Background",
			label: "Icon & Background",
			img: "Buttons/03_IconBackgroundButton.png"
		},
		Text_IconButton_Background = {
			name: "Text_IconButton_Background",
			label: "Icon, Text & Background",
			img: "Buttons/04_IconTextBackgroundButton.png"
		}
	],
	topbars = [

	]
]