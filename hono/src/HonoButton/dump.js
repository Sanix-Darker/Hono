
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


/**
 * [IDGenerator description]
 */
function IDGenerator() {

	this.length = 8;
	this.timestamp = +new Date;

	var _getRandomInt = function( min, max ) {
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	}

	this.generate = function() {
	 var ts = this.timestamp.toString();
	 var parts = ts.split( "" ).reverse();
	 var id = "";
	 for( var i = 0; i < this.length; ++i ) {
		var index = _getRandomInt( 0, parts.length - 1 );
		id += parts[index];	 
	 }
	 return id;
	}
}

function getRealValue_or_default(attribute, default_value){
	return (typeof attribute === 'undefined' || attribute == null || attribute === null) ? default_value: attribute; 
}

/**
 * [BuildButton description]
 * @param {[type]} button [description]
 */

function BuildButton(button){
	div_hono.innerHTML = "";

	//button.removeChild(document.createTextNode(div_hono_button_text));
	button.id = 'div_hono_button_';

	var att = document.createAttribute("class");
	att.value = 'div_hono_button ' + div_hono_button_class;
	button.setAttributeNode(att); 

	button.style = div_hono_button_css + ButtonPosition(div_hono_button_position);
 
	button.appendChild(document.createTextNode(div_hono_button_text));
	allreadyTextOnButton = true;
	div_hono.appendChild(button);
 
}

/**
 * [appendStyle description]
 * @param  {[type]} styles [description]
 * @return {[type]}        [description]
 */
function appendStyle(styles) {
  var css = document.createElement('style');
  css.type = 'text/css';

  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName("head")[0].appendChild(css);
}

/**
 * [langValue description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
function langValue(key){
	return (typeof array_lang_value[div_hono_button_lang] != 'undefined')?((typeof array_lang_value[div_hono_button_lang][key] != 'undefined')? array_lang_value[div_hono_button_lang][key]: ''): '--Bad-Lang-Key--';
}

var honoLOG = function(str){
	// Of course, log doen't need to be convert in Lang
	console.log("HONO > "+str);
}
var checkingParameters = function(value, attribute_name){
	(typeof value === 'undefined' || value == null || value === null) ? honoLOG(attribute_name+' is not valid or doesn\'t exist') : a++;
	return (typeof value === 'undefined' || value == null || value === null) ? false : true;
}
// Sha1
var SHA1 = function(msg){function rotate_left(n,s){var t4=(n<<s)|(n>>>(32-s));return t4};function lsb_hex(val){var str="";var i;var vh;var vl;for(i=0;i<=6;i+=2){vh=(val>>>(i*4+4))&0x0f;vl=(val>>>(i*4))&0x0f;str+=vh.toString(16)+vl.toString(16)}return str};function cvt_hex(val){var str="";var i;var v;for(i=7;i>=0;i--){v=(val>>>(i*4))&0x0f;str+=v.toString(16)}return str};function Utf8Encode(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128)}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128)}}return utftext};var blockstart;var i,j;var W=new Array(80);var H0=0x67452301;var H1=0xEFCDAB89;var H2=0x98BADCFE;var H3=0x10325476;var H4=0xC3D2E1F0;var A,B,C,D,E;var temp;msg=Utf8Encode(msg);var msg_len=msg.length;var word_array=new Array();for(i=0;i<msg_len-3;i+=4){j=msg.charCodeAt(i)<<24|msg.charCodeAt(i+1)<<16|msg.charCodeAt(i+2)<<8|msg.charCodeAt(i+3);word_array.push(j)}switch(msg_len%4){case 0:i=0x080000000;break;case 1:i=msg.charCodeAt(msg_len-1)<<24|0x0800000;break;case 2:i=msg.charCodeAt(msg_len-2)<<24|msg.charCodeAt(msg_len-1)<<16|0x08000;break;case 3:i=msg.charCodeAt(msg_len-3)<<24|msg.charCodeAt(msg_len-2)<<16|msg.charCodeAt(msg_len-1)<<8|0x80;break}word_array.push(i);while((word_array.length%16)!=14)word_array.push(0);word_array.push(msg_len>>>29);word_array.push((msg_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++)W[i]=word_array[blockstart+i];for(i=16;i<=79;i++)W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp}for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp}for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp}for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp}H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff}var temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase()}

var getCurrentHonoKey = function(){
	var generator = new IDGenerator();

	if(getCookie("hono_"+location.href+"_key") == null) {
		setCookie("hono_"+location.href+"_key", SHA1('Hono'+ (generator.generate()+location.href+'key')), 365);
	}

	return getCookie("hono_"+location.href+"_key");
}


/**
 * [checkTheMarginOfThePrice description]
 * @param  {[type]} amount        [description]
 * @param  {[type]} amount_enter  [description]
 * @param  {[type]} amount_margin [description]
 * @return {[type]}               [description]
 */
var checkTheMarginOfThePrice = function(amount, amount_enter, amount_margin){
	return (amount_enter >= (amount - amount*(amount_margin/100)))? true: false;
}

/**
 * [ButtonPosition description]
 * @param {[type]} position [description]
 */
var ButtonPosition = function(position){
	if(position == "standard"){
		return '';
	}else if(position == "float-left"){
		return 'position:fixed!important;left:0!important;bottom:0!important;';
	}else if(position == "float-right"){
		return 'position:fixed!important;right:0!important;bottom:0!important;';
	}else{
		return '';
	}
}
var treepoint = function(elt, sizemax){
  if(elt.length>sizemax)
    return "...";
  else
    return "";
}

var size_word = function (stringg, size){
  return stringg.substring(0, size)+treepoint(stringg, size);
}

var toggleModal = function () {
   modal.classList.toggle("show-modal");
}

var windowOnClick = function (event) {
   if (event.target === modal) {
       toggleModal();
   }
}
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


var isNumberOrNot = function(str, attributes){
	return (isNaN(str))? honoLOG(+attributes+" is not a valid number"): a++;
}


var display_hide = function(id_elet, show){
	(show) ? document.getElementById(id_elet).style.display = "block": document.getElementById(id_elet).style.display = "none";
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
