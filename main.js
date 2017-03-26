var elemCnt = 0;
var styleCnt = 0;

$(document).ready(function() {
	// Build Up Views
	InitUI();
	
	// Template Functions show how Elements are created
	TemplateTopbar();
	TemplateButton();

	console.log(data);
})

$(window).resize(function() {
	// Update Views to current Size
	UpdateUI();
})