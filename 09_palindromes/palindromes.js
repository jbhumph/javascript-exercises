const palindromes = function (string) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const newString = string
        .toLowerCase()
        .split('')
        .filter((character) => alpha.includes(character))
        .join('');

    const reversed = newString.split('').reverse().join('');

    return newString == reversed;

};

// Do not edit below this line
module.exports = palindromes;
