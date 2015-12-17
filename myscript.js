$( document ).ready(function() {
	$.each($('.description'), function () {
		console.log('fired');
		console.log(this);
		var p = $(this).children('p');
		var divh = $(this).height();
		while (p.outerHeight() > divh) {
		   	p.text(function (index, text) {
		       	return text.replace(/\W*\s(\S)*$/, '...');
		   	});
		}
	});
});