module.exports = function reverse (n) {
    let result = String(n).split('').sort(a => -1).join('');
    result = result.replace(/[^0-9]/g,'')
    return +result
}
