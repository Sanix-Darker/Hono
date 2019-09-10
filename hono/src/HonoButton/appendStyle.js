/**
 * [appendStyle description]
 * @param  {[type]} styles [description]
 * @return {[type]}        [description]
 */
const appendStyle = (styles) => {
    var css = document.createElement('style');
    css.type = 'text/css';
    if (css.styleSheet) css.styleSheet.cssText = styles;
    else css.appendChild(document.createTextNode(styles));
    document.getElementsByTagName("head")[0].appendChild(css);
}

export default appendStyle;