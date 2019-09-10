
/**
 * --------------------------------------------------------------------------------------
 * FUNCTIONS CODE ///////////////////////////////////////////////////////////////////////
 * --------------------------------------------------------------------------------------
*/

var a; // A useless Variable LOL
var currentdate = new Date(), 
  datetime = currentdate.getFullYear() + "-" +  
  get2D(currentdate.getMonth()+1) + "-" + 
  get2D(currentdate.getDate());



window.addEventListener("click", windowOnClick);

/**
 * Cookies Management ////////
 */
var getCookie = function (c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) {
	    c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1) {
	    c_value = null;
	}
	else {
	  	c_start = c_value.indexOf("=", c_start) + 1;
	  	var c_end = c_value.indexOf(";", c_start);
	  	if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}
var setCookie = function (c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}
var delcookie = function (name) {
    setCookie(name,"",-1);
}

/**
 * [BuildModal description]
 * @param {[type]} title         [title of the product]
 * @param {[type]} amount        [Amount of the product]
 * @param {[type]} margin_amount [margin on the price for the product]
 * @param {[type]} currency      [The actual currency]
 */
var modal;
var BuildModal = function(title, amount, margin_amount, currency){

	var hono_cookie_numero = (getCookie("hono_tel") != null) ?  getCookie("hono_tel") : '',
	hono_cookie_email = (getCookie("hono_email") != null) ?  getCookie("hono_email") : '',
	div = document.createElement("div");
	div.id = "hono_modal";
	div.innerHTML = '<div class="modal" style="display:none;">'+
		'<div class="modal-content" style="text-align: center;">'+
            '<span class="close-button" style="display:none;">×</span> '+
            '<center>'+
            	'<img src="'+image_logo+'">'+
                '<div id="hono_prix_box">'+
                	'<h3>'+langValue("MODAL_TITLE")+' :<br>"'+size_word(title, 17)+'" ['+amount+currency+']</h3>'+
                    '<table style="width: 90%;margin-top:-10px;">'+
                        '<tr>'+
                            '<td style="width: 80%;text-align: left;">'+
                                '<label style="font-size:14px;">'+langValue("MODAL_HOW_MUCH_DO_YOU_HAVE")+'<br><input autofocus="" type="number" id="myprice" placeholder="'+amount+'" style="width: 100%;" maxlength="10" max="9999999" ></label>'+
                            '</td>'+
                            '<td style="text-align: left;"><br><span id="currency"> &nbsp; '+currency.toUpperCase()+'</span></td>'+
                        '</tr>'+
                    '</table><br>'+
                    '<input type="button" value="'+langValue("MODAL_NEXT_BUTTON")+'" id="hono_suivant" onclick="slidedingBox('+amount+', '+margin_amount+')">'+
                '</div>'+
                '<div id="hono_contact_box" style="display: none;">'+
                    '<span style="font-size: 13px;">'+
                        langValue("MODAL_LEAVE_INFO")+'<br>'+
                    '</span><br>'+
                    '<table style="width: 90%;">'+
                        '<tr>'+
                            '<td><input type="text" style="width:100%;" maxlength="25" id="hono_numeroTel" value="'+hono_cookie_numero+'" placeholder="'+langValue("MODAL_ASK_NUMBER")+'"></td>'+
                            '<td style="width:5%"></td>'+
                            '<td><input type="text" style="width:100%;" maxlength="50" id="hono_Email" value="'+hono_cookie_email+'" placeholder="Email* "></td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td colspan="3">'+
                                '<br><textarea id="hono_Message" maxlength="100" row="7" placeholder="'+langValue("MODAL_LEAVE_MESSAGE_PLACEHOLDER")+'" style="width: 100%;"></textarea>'+
                            '</td>'+
                        '</tr>'+
                    '</table><br>'+
                    '<input type="button" value="'+langValue("MODAL_SEND_BUTTON")+'" id="hono_envoyer" onclick="slidedingBox2()"">'+
                '</div>'+
                '<div id="hono_contact_box_2" style="font-size:15px;display: none;">'+
                    '<span style="color:green;">'+langValue("MODAL_MESSAGE_SENT_SUCCESS")+'</span><br>'+langValue("MODAL_INDICATION_MESSAGE1")+'<a target="_blank" href="https://jeveutchat.herokuapp.com/chat.html?name=Client&room='+getCurrentHonoKey()+'">'+langValue("MODAL_INDICATION_MESSAGE2")+'</a>.'+
                '</div>'+
            '</center>'+
        '<small style="float:right;font-size:12px;margin-top:10px;">By Hono</small>'+
    '</div></div>';
	document.body.appendChild(div);
    
	modal = document.querySelector(".modal");
    var closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", toggleModal);
}


var slidedingBox = function(amount, margin_amount){
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
var slidedingBox2 = function(){
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

/**
 * [Manage_auto_Load description]
 * This function check the loading Way! Or call back
 */
function Manage_auto_Load(){
	if(div_hono_autoload_action == "onclosepage"){
		window.onbeforeunload = function() {
			BuildButton(button);
			return "Do you really want to leave? You can Negociate the price.";
		};
	}else if(div_hono_autoload_action == "onCallBack"){

	}else if(div_hono_autoload_action.contains("onwait")){
		setTimeout(function(){
			BuildButton(button);
		}, +(div_hono_autoload_action.replaceAll("onwait-", "")*1000));
	}else if(div_hono_autoload_action == "onclick"){
		BuildButton(button);
	}else{
		honoLOG("Problem with your 'data-autoload-action' ");
	}
}

/**
 * [honolaunch description]
 * @return {[type]} [description]
 */
function honolaunch(){
	//The call back to build the button from an external code
	BuildButton(button);
}

/**
 * [List of strings prototype description]
 */
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };


/**
 * --------------------------------------------------------------------------------------
 * MAIN CODE ////////////////////////////////////////////////////////////////////////////
 * --------------------------------------------------------------------------------------
*/
// Variables
// delcookie("hono_tetu"+getCurrentHonoKey());
// delcookie("hono_done_here"+getCurrentHonoKey());
// delcookie("dejaTest"+getCurrentHonoKey());
// delcookie("hono_"+location.href+"_key");
// This variables is for delinuants lol()
var tetu = getCookie("hono_tetu"+getCurrentHonoKey()),
	done_here = getCookie("hono_done_here"+getCurrentHonoKey()),
	dejaTest = getCookie("dejaTest"+getCurrentHonoKey());

// Getting Parameters
var div_hono = document.getElementById("div_hono"),
	div_hono_key = getRealValue_or_default(div_hono.getAttribute("data-key"), ''),
	
	// Time to appear ...

	// Product informations
	div_hono_product_image = getRealValue_or_default(div_hono.getAttribute("data-product-image"), image_logo),
	div_hono_product_title = div_hono.getAttribute("data-product-title"),
	div_hono_product_currency = div_hono.getAttribute("data-product-currency"),
	div_hono_product_amount = div_hono.getAttribute("data-product-amount").replace(/\,/g,"").replace(/\ /g,""),
	div_hono_product_margin_amount = div_hono.getAttribute("data-product-margin-amount").replace(/\,/g,"."),
	div_hono_button_lang = getRealValue_or_default(div_hono.getAttribute("data-button-lang"), 'en'),

	div_hono_emailseller = div_hono.getAttribute("data-emailseller"), // Email to contact

	// auto load of the product LESS IMPORTANT
	div_hono_id = getRealValue_or_default(div_hono.getAttribute("data-id"), "div_hono_element"),  // A personnal id, it's facultative and attribuate automaticaly when it's not provide
	div_hono_autoload_action = getRealValue_or_default(div_hono.getAttribute("data-autoload-action"), "onclick"), // onclosepage, onclick, onCallBack, onwait-10
	div_hono_button_position = getRealValue_or_default(div_hono.getAttribute("data-button-position"), "standard"), // float-left , float-right, standard, ''
	div_hono_button_css = getRealValue_or_default(div_hono.getAttribute("data-button-css"), ''),
	div_hono_button_class = getRealValue_or_default(div_hono.getAttribute("data-button-class"), ''),
	div_hono_button_text = langValue("HONO_BUTTON"), // Chercher en differentes langue aussi
	
	// From the button on the div Hono
	div_hono_number_trying = getRealValue_or_default(div_hono.getAttribute("data-number-trying"), 5); // Le nombre d'essaies restant apres que le user propose son prix

	div_hono.setAttribute("data-key", getCurrentHonoKey());


if(dejaTest != null && dejaTest > 5){
	honoLOG("Tetu guy detected");
}else{
	// Si le client a deja eu a conclure une cerrtaines somme
	if(done_here != null){

		// Check if the class attribute of button have some of....
		if(div_hono_button_class.contains('honobtnFade') || 
			div_hono_button_class.contains('honobtnPush') || 
			div_hono_button_class.contains('honobtnBorder') ||
			div_hono_button_class.contains('honobtnFloat') ||
			div_hono_button_class.contains('honobtnSlide')){
			appendStyle(Buttonstyles);
		}

		var button = document.createElement("button");
		// Check and act the auto load Way
		Manage_auto_Load();

		// The click on the button
		button.addEventListener("click", function(event){
			event.preventDefault();
			// Building the Modal
			window.open('https://jeveutchat.herokuapp.com/chat.html?name=Client&room='+getCurrentHonoKey(), '_blank');
		});
	}else{

		// On check si le user n'est pas un tetue qui 's'est amuser a depasser son delaie d'essaies de proposition de prix
		if(tetu == null){

			// Test if some values are numeric or not (and return )
			isNumberOrNot(div_hono_product_amount, 'data-product-amount');
			isNumberOrNot(div_hono_product_margin_amount, 'data-product-margin-amount');
			isNumberOrNot(div_hono_number_trying, 'data-number-trying');

			// Checking the most important parameters
			if(checkingParameters(div_hono.getAttribute('data-product-title'), 'data-product-title') && 
				checkingParameters(div_hono.getAttribute('data-product-currency'), 'data-product-currency') &&
				checkingParameters(div_hono.getAttribute('data-product-amount'), 'data-product-amount') &&
				checkingParameters(div_hono.getAttribute('data-product-margin-amount'), 'data-product-margin-amount') &&
				checkingParameters(div_hono.getAttribute('data-emailseller'), 'data-emailseller')
				){
					// Building the button
					var button = document.createElement("button");
					// Check and act the auto load Way
					Manage_auto_Load();

					honoLOG("Hono's site Key: "+getCurrentHonoKey());

					// The click on the button
					button.addEventListener("click", function(event){
						event.preventDefault();
						// Building the Modal
						BuildModal(div_hono_product_title, 
									div_hono_product_amount, 
									div_hono_product_margin_amount, 
									div_hono_product_currency);
						toggleModal();
					});

			}else{
				alert("HONO > ERROR, check well required parameters! See your Console.");
			}

		}else{
			honoLOG("Tetu guy detected");
		}

	}
}
