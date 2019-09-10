/**
 * [langValue description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
const langValue = (key) => {
	return (typeof array_lang_value[div_hono_button_lang] != 'undefined')?((typeof array_lang_value[div_hono_button_lang][key] != 'undefined')? array_lang_value[div_hono_button_lang][key]: ''): '--Bad-Lang-Key--';
}

export default langValue;