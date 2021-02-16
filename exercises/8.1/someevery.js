const listNames = ['Maria', 'Manuela', 'Maria', 'Mozambiqua', 'Moacira'];

const verifyFirstLetter = (letter, names) => {
  return names.every((name) => name[0] === letter);
};

const verifyLastLetter = (letter, names) => {
  return names.every((name) => name[name.length - 1] === letter);
};


console.log(verifyLastLetter('a', listNames)); // true
console.log(verifyLastLetter('e', listNames)); // true
console.log(verifyLastLetter('u', listNames)); // false
console.log(verifyFirstLetter('m', listNames)); // true
console.log(verifyFirstLetter('M', listNames)); // falseconst listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];