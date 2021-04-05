// Desafio 1
function compareTrue(booleanValue1, booleanValue2) {
  return booleanValue1 && booleanValue2;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  return (`${string[string.length - 1]}, ${string[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(value) {
  let highestNumber = Math.max.apply(null, value);
  let repeatedAmount = 0;
  for (let index2 in value) {
    if (value[index2] === highestNumber) {
      repeatedAmount += 1;
    }
  }
  return repeatedAmount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);

  if (cat1 < cat2) {
    return 'cat1';
  }
  if (cat1 > cat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(value) {
  let arrayString = [];
  for (let index = 0; index < value.length; index += 1) {
    arrayString[index] = 'bug!';
    if (value[index] % 15 === 0) {
      arrayString[index] = 'fizzBuzz';
    } else if (value[index] % 3 === 0) {
      arrayString[index] = 'fizz';
    } else if (value[index] % 5 === 0) {
      arrayString[index] = 'buzz';
    }
  }
  return arrayString;
}

// Desafio 9
function encode(string) {
  for (let index = 0; index < string.length; index += 1) {
    string = string.replace('a', '1');
    string = string.replace('e', '2');
    string = string.replace('i', '3');
    string = string.replace('o', '4');
    string = string.replace('u', '5');
  }
  return string;
}

function decode(string) {
  for (let index = 0; index < string.length; index += 1) {
    string = string.replace('1', 'a');
    string = string.replace('2', 'e');
    string = string.replace('3', 'i');
    string = string.replace('4', 'o');
    string = string.replace('5', 'u');
  }
  return string;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
