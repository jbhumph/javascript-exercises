const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((a, b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b, 1);;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	if (x === 0) return 1;
  let product = 1;
  for (let i = x; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
