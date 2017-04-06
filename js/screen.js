function UpdateUI() {
	$('.leftView').css('height', window.innerHeight - 68 + 'px');
	$('.rightView').css('height', window.innerHeight - 68 + 'px');
}

function InitUI() {
	// Create Topbar
	$('body').append('<div class="topbar" id="electron-titlebar"></div>');
	$('.topbar').append('<div class="appLabel drag">flows</div>');

	// Create Main Views
	$('body').append('<div class="contentView"></div>');
	$('.contentView').append('<div class="leftView"></div>');
	$('.contentView').append('<div class="rightView"></div>');

	InitCanvas();

	// First Artboard, temporary?
	// $('.rightView').append('<div class="artboard iphone7 selected"></div>');

	UpdateUI();
}