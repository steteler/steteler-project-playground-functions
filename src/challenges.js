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
  let first = string[0];
  let last = string[string.length - 1];

  return (last, ',', first);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(value) {
  let highestNumber = 0;
  let repeatedAmount = 0;
  for (let index in value) {
    if (value[index] > highestNumber) {
      highestNumber = value[index];
    }
  }
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
  else if (cat1 > cat2) {
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }

}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
