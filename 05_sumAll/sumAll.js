const sumAll = function(num1, num2) {
    let total = 0;
    let start = 0;
    let end = 0;
    if (Number.isInteger(num1) == false || Number.isInteger(num2) == false) {
        return "ERROR";
    }
    if (num1 < num2) {
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    }
    if (start < 1) {
        return "ERROR";
    }
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
