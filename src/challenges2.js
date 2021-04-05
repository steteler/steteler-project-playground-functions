// Desafio 10
function techList(array, name) {
  array = array.sort();

  for (let index = 0; index < array.length; index += 1) {
    array[index] = {
      array: array[index],
      name,
    };
  }
  if (array.length === 0) {
    array = 'Vazio!';
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(index, array) {
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
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
