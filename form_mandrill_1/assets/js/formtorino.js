$().ready(function(){
//QUANDO NELLA CONSOLE SCHIACCCIAMO QULSIASI TASTO NELLA CONSOLE VIENE SCRITTO LA PAROLA REGISTRATA E LA TIENE IN MEMORIA 
	$('#bottom').click(function(){
		//stampa in console in first name
			console.log($('#exampleInputName2').val());
			//stampa in console l email
			console.log($('#exampleInputEmail1').val());
			//stampa in console la password
			console.log($('#exampleInputPassword1').val());

		//dentro la casella dell email lo stesso testo in un altra div sotto un il testo 
		$( "#ciccio" ).html($(this).val()) ;
	});
	

});