function UpdateUI() {
	// $('.leftView').css('height', window.innerHeight - 68 + 'px');
	$('.rightView').css('height', window.innerHeight - 68 + 'px');
	$('.libraryView').css('height', window.innerHeight - 68 + 'px');
	$('.instancesView').css('height', window.innerHeight - 68 + 'px');
}

function InitUI() {
	// Create Topbar
	$('body').append('<div class="topbar" id="electron-titlebar"></div>');
	$('.topbar').append('<div class="appLabel drag">flows</div>');

	// Create Main Views
	$('body').append('<div class="contentView"></div>');
	// $('.contentView').append('<div class="leftView"></div>');
	$('.contentView').append('<div class="rightView"></div>');

	$('.topbar').append('<div class="osStateBtn libraryBtn"></div>');
	$('.topbar').append('<div class="osStateBtn instancesBtn"></div>');

	$('.libraryBtn').append('<div class="osBtnIcon libraryIcon"></div>');
	$('.instancesBtn').append('<div class="osBtnIcon instancesIcon"></div>');

	InitCanvas();
	InitUiTopbar();
	InitLibraryView();
	InitInstancesView();

	UpdateUI();
}

function InitLibraryView() {
	$('.contentView').append('<div class="libraryView"></div>');
	$('.libraryView').append('<h2>Library</h2>');
	$('.libraryView').append('<div class="contentSection" id="libBtns"></div>');

	for (var i = 0; i < lib[0].length; i++) {
		$('#libBtns').append('<div class="libElement" id="' + lib[0][i].id + '"></div>');

		$('#' + lib[0][i].id).css('background-image', 'url(img/Library/' + lib[0][i].img);

		if (i%2!=0) {
			$('#' + lib[0][i].id).addClass('lineBreak');
		}

		$('#' + lib[0][i].id).append('<h3>'+lib[0][i].label+'</h3>');

		$('#' + lib[0][i].id).append('<div class="libElementClicked"></div>');

		$('#' + lib[0][i].id).click(function(){
			var libCategory = parseInt(this.id.charAt(1));
			var libId = parseInt(this.id.charAt(3));

			var myButton = new Button('MyButton');
			var myButtonStyle = new Style('MyButtonStyle');
			myButtonStyle.DefineGroup(lib[libCategory][libId].style);
			myButtonStyle.Apply(myButton);
			myButton.SetPosition(lib[libCategory][libId].dim);
		})
	}
}

function InitInstancesView() {
	$('.contentView').append('<div class="instancesView"></div>');
	$('.instancesView').append('<h2>Instances</h2>');
}

function HandleOsBtnStates(btn) {
	if (!$(btn).hasClass('active')) {
		$(btn).addClass('active');
		$($(btn).children()[0]).addClass('active');
	} else {
		$(btn).removeClass('active');
		$($(btn).children()[0]).removeClass('active');
	}
}

function InitUiTopbar() {
	$('.instancesBtn').click(function() {
		HandleOsBtnStates(this);
		TriggerInstancesView();
	})
	$('.libraryBtn').click(function() {
		HandleOsBtnStates(this);
		TriggerLibraryView();
	})
}

function TriggerViewState(view) {
	if (!$(view).hasClass('active')) {
		$(view).addClass('active');
	} else {
		$(view).removeClass('active');
	}
}

function TriggerLibraryView() {
	TriggerViewState('.libraryView');
}

function TriggerInstancesView() {
	TriggerViewState('.instancesView');
}