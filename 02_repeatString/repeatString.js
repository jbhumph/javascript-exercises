const repeatString = function(word, number) {
    cat = ''
    if (number < 0) {
        cat = 'ERROR'
    }
    for (i = 0; i < number; i++) {
        cat += word
    }

    return cat
};

// Do not edit below this line
module.exports = repeatString;
