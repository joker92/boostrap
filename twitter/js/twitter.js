$(document).ready(function(){
	//keyup ogni volta che alzo il tasto lui conta i caratteri
	$("#text").on('keyup', function(event) {
		var max=140;

		var count = $("#text").val().length;
		//il massimo 140 meno la lunghezza attuale che puoi inserire 
		var length=max-count;
		//modifichiamo ilcontenuto del '.post' scrive tutto quello che inseriamo lo va ad inserire dentro alla variabilee modifica l html del suo elemento 
		$('.post').html(length);
		console.log(length);
		if(count==0 || count > max){
			//qui ti se non scrvi o superi la lunghezza ti disabilita il bottone 
			document.getElementById('buttum').disabled = true;
			console.log('sono in if');
		}else{
			//seinvece scrivi oppure stai nei limiti del 140 il bottone si attiva
			document.getElementById('buttum').disabled = false;
			console.log('sono in else '+count);
		}
	});
	//il prepend serve per inserire l ultimo commento prima di  tutti 
	$('#buttum').click(function() {
		var new_task = $('#text').val();
		//dopo l invio del post cancella tutta la casella del testo
		$('#text').val('');
		//dopo l invio resertta il contatore dei caratteri 
		$('.post').html('140');
		$('.cic').prepend('<li>'+new_task+'</li>');
		
	});

});
