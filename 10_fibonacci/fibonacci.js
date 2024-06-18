const fibonacci = function(y) {
    x = parseInt(y);
    if (x < 0) return "OOPS"
    let fibb = [0, 1];
    while (fibb.length < x+1) {
        fibb.push(fibb[fibb.length-1] + fibb[fibb.length-2]);
    }
    return fibb[x]
};

// Do not edit below this line
module.exports = fibonacci;
