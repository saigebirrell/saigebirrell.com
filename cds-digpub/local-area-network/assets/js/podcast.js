$(document).ready(function(){

console.log ("im ready");


	$('.btn-better').click(function(){
		$('.podcast-item').addClass('hide');
		$('.better').removeClass('hide');
	});



	$('.btn-skills').click(function(){
		$('.podcast-item').addClass('hide');
		$('.skills').removeClass('hide');
	});



	$('.btn-business').click(function(){
		$('.podcast-item').addClass('hide');
		$('.business').removeClass('hide');
	});



	$('.btn-thinking').click(function(){
		$('.podcast-item').addClass('hide');
		$('.thinking').removeClass('hide');
	});


});