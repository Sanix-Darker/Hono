/**
 * [ButtonPosition description]
 * @param {[type]} position [description]
 */
const ButtonPosition = (position) => {
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

/**
 * [BuildButton description]
 * @param {[type]} button [description]
 */

const BuildButton = (button) => {
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

export default BuildButton;