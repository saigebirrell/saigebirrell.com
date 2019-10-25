$(document).ready(function(){

console.log ("im ready");
	


	$('.carla').addClass('hide');
	$('.anita').addClass('hide');
	$('.maria').addClass('hide');
	$('.neeta').addClass('hide');

	

// image for each profile

	
	$('.btn-elvira').click(function(){
		$('.profile-face').addClass('hide');
		$('.elvira').removeClass('hide');
	});


	$('.btn-carla').click(function(){
		$('.profile-face').addClass('hide');
		$('.carla').removeClass('hide');
	});


	$('.btn-anita').click(function(){
		$('.profile-face').addClass('hide');
		$('.anita').removeClass('hide');
	});


	$('.btn-maria').click(function(){
		$('.profile-face').addClass('hide');
		$('.maria').removeClass('hide');
	});


	$('.btn-neeta').click(function(){
		$('.profile-face').addClass('hide');
		$('.neeta').removeClass('hide');
	});





// bio for each profile 


	$('.btn-elvira').click(function(){
		$('.profile-bio').addClass('hide');
		$('.elvira').removeClass('hide');
	});


	$('.btn-carla').click(function(){
		$('.profile-bio').addClass('hide');
		$('.carla').removeClass('hide');
	});


	$('.btn-anita').click(function(){
		$('.profile-bio').addClass('hide');
		$('.anita').removeClass('hide');
	});


	$('.btn-maria').click(function(){
		$('.profile-bio').addClass('hide');
		$('.maria').removeClass('hide');
	});


	$('.btn-neeta').click(function(){
		$('.profile-bio').addClass('hide');
		$('.neeta').removeClass('hide');
	});






});






