var elemCnt = 0;
var styleCnt = 0;
var artboardCnt = 0;

$(document).ready(function() {
	// Build Up Views
	InitUI();
	
	// Template Functions show how Elements are created
	// ------------TEMPORARY!!!------------
	TemplateArtboards();
	TemplateTopbar();
	TemplateButton();
	// ------------TEMPORARY!!!------------
})

$(window).resize(function() {
	// Update Views to current Size
	UpdateUI();
})