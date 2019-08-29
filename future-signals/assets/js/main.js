$ (document).ready(function(){
	console.log("hello world");


	$('.research-item').click(function(){
		$(this).addClass('large');

	});




	var hideAll = function() {
		$('.research-item').addClass('hide');

	}




});