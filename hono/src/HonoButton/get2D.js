/**
 * get2D
 * @param {*} num
 */
const get2D = ( num ) => {
    if( num.toString().length < 2 ) // Integer of less than two digits
        return "0" + num; // Prepend a zero!
    return num.toString(); // return string for consistency
}
export default get2D;