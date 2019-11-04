import React, {Component} from 'react';

import Methods from './Methods';

class HonoButton extends Component {
    constructor (props){
        super(props);

        this.state = {

        }
    }

    componentWillReceiveProps(nextProps){

    }

    componentDidMount(){
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
         * [honolaunch description]
         * @return {[type]} [description]
         */
        function honolaunch(){
            //The call back to build the button from an external code
            BuildButton(button);
        }

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
    }

    render() {
        return (<div></div>);
    }
}

export default HonoButton;