import {getCurrentHonoKey, langValue, checkTheMarginOfThePrice, display_hide} from './subMethods';

import {setCookie, getCookie} from './cookies';

export const step1 = (amount, margin_amount) => {
	if(checkTheMarginOfThePrice(amount, document.getElementById('myprice').value, margin_amount)){
		display_hide('hono_prix_box', false);
		display_hide('hono_contact_box_2', false);
		display_hide('hono_contact_box', true);

		setCookie("hono_amount"+getCurrentHonoKey(), document.getElementById('myprice').value, 30);

	}else{
		if(div_hono_number_trying == 0){
			display_hide('div_hono_button_', false);
			document.querySelector('.close-button').click();
			honoLOG("Blocking the Negociation Button");
			setCookie("hono_tetu"+getCurrentHonoKey(), 1, 7);
		}else{
			alert(langValue("ALERT_YOURMONEY_TOO_SMALL1")+' '+div_hono_number_trying+' '+langValue("ALERT_YOURMONEY_TOO_SMALL2"));
			div_hono_number_trying--;
			var dejadeja = +getCookie("dejaTest"+getCurrentHonoKey()) + 1;
			setCookie("dejaTest"+getCurrentHonoKey(), dejadeja, 3);
		}
	}
}


export const step2 = () => {
	if(document.getElementById('hono_Email').value != '' && document.getElementById('hono_Message').value != ''){
		// hono_contact_box_2
		display_hide('hono_prix_box', false);
		display_hide('hono_contact_box', false);
		display_hide('hono_contact_box_2', true);

		if(document.getElementById('hono_numeroTel').value!=''){
			setCookie("hono_tel", document.getElementById('hono_numeroTel').value, 30);
		}
		if(document.getElementById('hono_Email').value!=''){
			setCookie("hono_email", document.getElementById('hono_Email').value, 30);
		}

		// Envoi du mail
		Email.send({
			SecureToken : "387be5f9-0056-4e66-8453-407f28034aa5",
			To : div_hono_emailseller,
			From : "honobutton@gmail.com",
			Subject : "HONO - ["+document.getElementById('myprice').value+"] "+div_hono_product_title,
			Body : "<h4><u>HONOSYSTEMS</u></h4><br>"+
			langValue("EMAIL_HELLO_MESSAGE")+":<br><hr>"+
			"<b>"+langValue("EMAIL_INTITULE_ARTICLE")+":</b> "+window.location.hostname+" -- <a href="+location.href+" target='_blank'>"+div_hono_product_title+"</a><br>"+
			"<b>"+langValue("EMAIL_INTITULE_AMOUNT")+":</b> "+div_hono_product_amount+" "+div_hono_product_currency+"<br>"+
			"<b>"+langValue("EMAIL_INTITULE_PROPOSITION")+":</b> "+document.getElementById('myprice').value+" "+div_hono_product_currency+"<br>"+
			"<b>"+langValue("EMAIL_INTITULE_EMAIL")+":</b> "+document.getElementById('hono_Email').value+"<br>"+
			"<b>"+langValue("EMAIL_INTITULE_NUMERO")+":</b> "+document.getElementById('hono_numeroTel').value+"<br>"+
			"<b>"+langValue("EMAIL_INTITULE_MESSAGE")+":</b><br> <i>'"+size_word(document.getElementById('hono_Message').value, 200)+"'</i><br><hr>"+
			langValue("EMAIL_JOIN_TCHAT_MESSAGE1")+' <a target="_blank" href="https://jeveutchat.herokuapp.com/chat.html?name=Seller&room='+getCurrentHonoKey()+'">'+langValue("EMAIL_JOIN_TCHAT_MESSAGE2")+'</a><br><br>'+
			'<i><small style="font-size:12px;">'+datetime+' By Hono</small></i>'
		}).then(
		 message => {
			honoLOG(message);
			honoLOG("Mail send.");
		  }
		);

		setCookie("hono_done_here"+getCurrentHonoKey(), 1, 30);
	}else{
		alert("FILL_CORRECTLY_FORMMAIL");
	}
}