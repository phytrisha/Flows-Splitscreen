function InitEditorUi() {
	$('.contentView').append('<div class="editorUi"></div>');
}

function TriggerEditor(obj) {
	$('.editorUi').addClass('active');
	$('.editorUi').append('<input class="editorSlider" id="editorBorderRadius" type="range" min="1" max="100" step="1"/>');

	$("#editorBorderRadius").val(parseInt(obj.style["border-radius"]));
	$('#editorBorderRadius').on('input', function() {
		$(obj.obj).css('border-radius', $(this).val() + 'px');
		obj.style['border-radius'] = $(this).val() + 'px';
		$('#incElemThumb'+obj.id).css('border-radius', $(this).val() + 'px');
	})
}