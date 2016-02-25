$().ready(function(){
		//controlla se e un numero di telefono 
		function cheekphone(tel){
			if($.isNumeric(tel)){
				console.log('sono un numero');
				return true;
			}	else{
				console.log(' non sono un numero');
				return false;
			}
		}
		//controllo se è un email valida
		function isValidEmailAddress(email) {
			var test = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

			if(test.test(email)){
				console.log('sono un email valida');
				return true;

			}else{
				console.log(' non sono un email valida')
				return false;
			}
		};
//serve per mandare l email con mandrill
function sendTheMail(param,key){
	console.log("sto mandando le mail");
	console.log(param);
	console.log(key);


//serve per fare la chimata ajax per le api (servono per chiamare file json oppure per inviare massaggi)
$.ajax({
	type:"POST",
	url: "https://mandrillapp.com/api/1.0/messages/send.json",
	data:{
		'key':key,
		'message':{
			'from_email':param.message.from_email,
			'to':param.message.to,
			"subject":param.message.subject,
			"text":param.message.text
		}
	}

	}).done(function(response){
		console.log(response);

	});

}

//QUANDO NELLA CONSOLE SCHIACCCIAMO QULSIASI TASTO NELLA CONSOLE VIENE SCRITTO LA PAROLA REGISTRATA E LA TIENE IN MEMORIA 
$('#myform').on('submit', function(){
		//Key serve per puntare al profilo di mandrill di speziale 
		var key='zY4amYJtRK9aaLvrMbiI4A';

			//selettore name
			var nome = $('#exampleInputName2').val();
			console.log(nome);
		//selettore email
		var email = $('#exampleInputEmail1').val();
		console.log(email);
		//selettore di jq company
		var comp= $('#exampleInputName3').val();
		console.log(comp);
		//selettore telefono
		var tel = $('#tel').val();
		console.log(tel);

		//selettore di jquery testo
		var text = $('#text').val();
		console.log(text);
		//richiama la funzione per vedere se e un numero
		cheekphone(tel);
		isValidEmailAddress(email);
		

	//  campi indicati sotto != ""  se i campi sono compilati c sono stampali else i campi sono vuoti

	if(nome != "" && email !="" && comp !="" && tel !="" && text !="" && cheekphone(tel) && isValidEmailAddress(email)){
		var param={
			"message":{

				"from_email":email,
				"to" :[{
					"email": "andrea.speziale@top-ix.org"
				}],
				"subject":"engim email ",
				"text":text
			}
		};


			sendTheMail(param,key);



		console.log('puoi mandare l email');
	}else{
		console.log('non puoi madare l email');
	}
//serve per impedire il refresch
	return false;


});


});