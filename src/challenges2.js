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
function generatePhoneNumber() {
  // seu código aqui
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
