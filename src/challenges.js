// Desafio 1
function compareTrue(booleanValue1, booleanValue2) {
  return booleanValue1 && booleanValue2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  return (string[0], ',', string[string.length - 1]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
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
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);

  console.log(cat1, cat2);

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
    arrayString[index] = 'bug';
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

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let encodeString = '';
  for (let index of string) {
    switch (index) {
    case 'a':
      encodeString += 1;
      break;
    case 'e':
      encodeString += 2;
      break;
    case 'i':
      encodeString += 3;
      break;
    case 'o':
      encodeString += 4;
      break;
    case 'u':
      encodeString += 5;
      break;
    default:
      encodeString += index;
      break;
    }
  }
  return encodeString;
}

function decode(string) {
  let decodeString = '';
  for (let index of string) {
    switch (index) {
    case '1':
      decodeString += 'a';
      break;

    case '2':
      decodeString += 'e';
      break;

    case '3':
      decodeString += 'i';
      break;

    case '4':
      decodeString += 'o';
      break;

    case '5':
      decodeString += 'u';
      break;

    default:
      decodeString += index;
      break;
    }
  }
  return decodeString;
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
