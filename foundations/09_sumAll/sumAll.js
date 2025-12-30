const sumAll = function(a, b) {
    if (a < 0 || b < 0) return 'ERROR'
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'

    if (a > b) {
        let tmp = a
        a = b
        b = tmp
    }

    let totalValue = 0
    for (let x = a; x <= b; x++) {
        totalValue +=x
    }
    
    return totalValue
};

// Do not edit below this line
module.exports = sumAll;
