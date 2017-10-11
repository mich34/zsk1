$(document).ready(function(){
	$('div').css('background','#AC5467');
	$('.tekst').css('background', 'teal');
	//$('#id1').css('background', 'red');
	$('#id2').css('color', 'white');
	$('#id1').css({'background': '#AC5467','color': '#12AF36'});
	$('*').css('font-family', 'arial', 'verdana');
	//$('*').css('color', 'pink');
	//$('*').css({'color': 'pink', 'font-size': '120%'});
	$('#btn1').click(function(){
		$('div').css('color','#87CD3E');
	})
	$('#hide').click(function(){
		$('#akapit').hide('fast');
	})
	$('#show').click(function(){
		$('#akapit').show('slow');
	})
	$('#zmienHTML').click(function(){
		$('#html').html('<h1>zmieniony tekst</h1>');
	})
	$('a').css('color', 'green');
	$('#link a').css('color', 'black');
	$('#kolorInny').click(function(){
		$('input[type="text]').css({'background': '#AC5400','color': 'black'});
	})
})