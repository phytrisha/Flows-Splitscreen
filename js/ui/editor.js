var idToEdit = '';

function SelectElement(id) {
	$('.element').removeClass('selected');
	$(id).addClass('selected');
	$('#border-radius').val(parseInt($(id).css('border-radius')));
	idToEdit = id;
}

function InitEditor() {
	$('#border-radius').on('input', function() {
		var parent = $(idToEdit).attr('parent');
		data.elements[parent].DefineStyle({'border-radius': $('#border-radius').val() + 'px'});
	})
}