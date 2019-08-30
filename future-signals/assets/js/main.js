$(document).ready(function(){

console.log ("im ready");


	$('.btn-all').click(function(){
		$('.research-item').addClass('hide');
		$('.all').removeClass('hide');
	});



	$('.btn-signup').click(function(){
		$('.research-item').addClass('hide');
		$('.signup').removeClass('hide');
	});



	$('.btn-profile').click(function(){
		$('.research-item').addClass('hide');
		$('.profile').removeClass('hide');
	});



	$('.btn-match').click(function(){
		$('.research-item').addClass('hide');
		$('.match').removeClass('hide');
	});


	$('.btn-genetics').click(function(){
		$('.research-item').addClass('hide');
		$('.genetics').removeClass('hide');
	});



});