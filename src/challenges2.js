// Desafio 10
function techList(tech, name) {
  tech = tech.sort();

  for (let index = 0; index < tech.length; index += 1) {
    tech[index] = {
      tech: tech[index],
      name,
    };
  }
  if (tech.length === 0) {
    tech = 'Vazio!';
  }
  return tech;
}

// Desafio 11
function lessThanThreeRepsSecond(index, array) {
  let lessThanThree = true;
  let counterOfRep = 0;
  for (let index2 = 1; index2 < array.length; index2 += 1) {
    if (array[index] === array[index2]) {
      counterOfRep += 1;
    }
  }
  if (counterOfRep > 2) {
    lessThanThree = false;
  }
  return lessThanThree;
}
function lessThanThreeReps(array) {
  let lessThanThree = true;
  for (let index = 0; index < array.length; index += 1) {
    lessThanThree = lessThanThreeRepsSecond(index, array);
    if (lessThanThree === false) {
      break;
    }
  }
  return lessThanThree;
}
function betweenZeroNine(array) {
  let zeroAndNine = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      zeroAndNine = false;
    }
  }
  return zeroAndNine;
}
function withElevenNumbers(array) {
  let phoneNumber = ['(', 0, 0, ') ', 0, 0, 0, 0, 0, '-', 0, 0, 0, 0];
  let difOfIndex = 1;
  for (let index = 0; index < array.length; index += 1) {
    if (index === 2 || index === 7) {
      difOfIndex += 1;
      phoneNumber[index + difOfIndex] = array[index];
    } else {
      phoneNumber[index + difOfIndex] = array[index];
    }
  }
  return phoneNumber.join('');
}
function generatePhoneNumber(array) {
  let phoneNumber = [];
  if (array.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else if (betweenZeroNine(array) !== true || lessThanThreeReps(array) !== true) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  } else {
    phoneNumber = withElevenNumbers(array);
  }
  return phoneNumber;
}

// Desafio 12

function checkLineC(line1, line2, line3) {
  let canBeTriangle = false;
  if (line3 < line1 + line2 && line3 > Math.abs(line1 - line2)) {
    canBeTriangle = true;
  }
  return canBeTriangle;
}

function triangleCheck(line1, line2, line3) {
  let canBeTriangle = false;
  let sumBC = line2 + line3;
  let sumAC = line1 + line3;
  let difAbsBC = Math.abs(line2 - line3);
  let difAbsAC = Math.abs(line1 - line3);
  if (line1 < sumBC && line1 > difAbsBC && line2 < sumAC && line2 > difAbsAC) {
    canBeTriangle = checkLineC(line1, line2, line3);
  }
  return canBeTriangle;
}

// Desafio 13
function hydrate(string) {
  let numbs = string.replace(/[^0-9]/g, '');
  numbs = numbs.split('');
  let whaterCups = 0;
  for (let index = 0; index < numbs.length; index += 1) {
    whaterCups += parseInt(numbs[index], 10);
  }
  if (whaterCups > 1) {
    whaterCups = whaterCups.toString();
    whaterCups = whaterCups.concat(' copos de água');
  } else {
    whaterCups = whaterCups.toString();
    whaterCups = whaterCups.concat(' copo de água');
  }
  return whaterCups;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
