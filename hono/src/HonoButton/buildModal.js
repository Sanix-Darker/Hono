import { langValue, size_word, getCurrentHonoKey} from './subMethods';

import {getCookie} from './cookies';

/**
 * [BuildModal description]
 * @param {[type]} title         [title of the product]
 * @param {[type]} amount        [Amount of the product]
 * @param {[type]} margin_amount [margin on the price for the product]
 * @param {[type]} currency      [The actual currency]
 */
var modal;
export const BuildModal = (title, amount, margin_amount, currency) => {

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