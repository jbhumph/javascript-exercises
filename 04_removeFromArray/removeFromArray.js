const removeFromArray = function(array, val1, val2, val3, val4) {
    newArray = [];
    j = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] != val1 && array[i] != val2 && array[i] != val3 && array[i] != val4) {
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
