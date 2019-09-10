export const honoLOG = (str) => {
	// Of course, log doen't need to be convert in Lang
	console.log("HONO > "+str);
}


// Functions
/* SmtpJS.com - v3.0.0 */
const Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
export default Email;


export const getRealValue_or_default = (attribute, default_value) => {
	return (typeof attribute === 'undefined' || attribute == null || attribute === null) ? default_value: attribute;
}


/**
 * get2D
 * @param {*} num
 */
export const get2D = ( num ) => {
    if( num.toString().length < 2 ) // Integer of less than two digits
        return "0" + num; // Prepend a zero!
    return num.toString(); // return string for consistency
}


/**
 * [langValue description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
export const langValue = (key) => {
	return (typeof array_lang_value[div_hono_button_lang] != 'undefined')?((typeof array_lang_value[div_hono_button_lang][key] != 'undefined')? array_lang_value[div_hono_button_lang][key]: ''): '--Bad-Lang-Key--';
}

export const checkingParameters = (value, attribute_name) => {
	(typeof value === 'undefined' || value == null || value === null) ? honoLOG(attribute_name+' is not valid or doesn\'t exist') : a++;
	return (typeof value === 'undefined' || value == null || value === null) ? false : true;
}

/**
 * [checkTheMarginOfThePrice description]
 * @param  {[type]} amount        [description]
 * @param  {[type]} amount_enter  [description]
 * @param  {[type]} amount_margin [description]
 * @return {[type]}               [description]
 */
export const checkTheMarginOfThePrice = (amount, amount_enter, amount_margin) => {
	return (amount_enter >= (amount - amount*(amount_margin/100)))? true: false;
}


/**
 * [image_logo Image LOGO Base64 encoding]
 * @type {String}
 */
const image_logo = "data:image/png;\
                    base64,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";
export default image_logo;


// Sha1
export const SHA1 = (msg) => {function rotate_left(n,s){var t4=(n<<s)|(n>>>(32-s));return t4};function lsb_hex(val){var str="";var i;var vh;var vl;for(i=0;i<=6;i+=2){vh=(val>>>(i*4+4))&0x0f;vl=(val>>>(i*4))&0x0f;str+=vh.toString(16)+vl.toString(16)}return str};function cvt_hex(val){var str="";var i;var v;for(i=7;i>=0;i--){v=(val>>>(i*4))&0x0f;str+=v.toString(16)}return str};function Utf8Encode(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128)}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128)}}return utftext};var blockstart;var i,j;var W=new Array(80);var H0=0x67452301;var H1=0xEFCDAB89;var H2=0x98BADCFE;var H3=0x10325476;var H4=0xC3D2E1F0;var A,B,C,D,E;var temp;msg=Utf8Encode(msg);var msg_len=msg.length;var word_array=new Array();for(i=0;i<msg_len-3;i+=4){j=msg.charCodeAt(i)<<24|msg.charCodeAt(i+1)<<16|msg.charCodeAt(i+2)<<8|msg.charCodeAt(i+3);word_array.push(j)}switch(msg_len%4){case 0:i=0x080000000;break;case 1:i=msg.charCodeAt(msg_len-1)<<24|0x0800000;break;case 2:i=msg.charCodeAt(msg_len-2)<<24|msg.charCodeAt(msg_len-1)<<16|0x08000;break;case 3:i=msg.charCodeAt(msg_len-3)<<24|msg.charCodeAt(msg_len-2)<<16|msg.charCodeAt(msg_len-1)<<8|0x80;break}word_array.push(i);while((word_array.length%16)!=14)word_array.push(0);word_array.push(msg_len>>>29);word_array.push((msg_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++)W[i]=word_array[blockstart+i];for(i=16;i<=79;i++)W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp}for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp}for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp}for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp}H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff}var temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase()}


export const treepoint = (elt, sizemax) = {
    return (elt.length>sizemax) ? "..." : ""
}

export const size_word = (stringg, size) => {
  return stringg.substring(0, size)+treepoint(stringg, size);
}

export const toggleModal = () => {
   modal.classList.toggle("show-modal");
}

export const windowOnClick = (event) => {
   if (event.target === modal) {
       toggleModal();
   }
}

export const isNumberOrNot = (str, attributes) => {
	return (isNaN(str))? honoLOG(+attributes+" is not a valid number"): a++;
}

export const display_hide = (id_elet, show) => {
	(show) ? document.getElementById(id_elet).style.display = "block": document.getElementById(id_elet).style.display = "none";
}


export const getCurrentHonoKey = () => {
	var generator = new IDGenerator();

	if(getCookie("hono_"+location.href+"_key") == null) {
		setCookie("hono_"+location.href+"_key", SHA1('Hono'+ (generator.generate()+location.href+'key')), 365);
	}

	return getCookie("hono_"+location.href+"_key");
}


/**
 * [List of strings prototype description]
 */
String.prototype.replaceAll = (search, replacement) => {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
String.prototype.contains = (it) => { return this.indexOf(it) != -1; };