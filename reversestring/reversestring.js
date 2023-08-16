// function reverseString (str) {
//     return str.split('').reverse().join('')
// }

function reverseString (str) {
    let reversed = ''
    for(const el of str){
        reversed = el + reversed
    }
    return reversed
}

module.exports = reverseString