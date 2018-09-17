var amigos = [{
    nome: 'Anna',
    livros: ['Bible', 'Harry Potter'],
    idade: 21
  }, {
    nome: 'Bob',
    livros: ['War and peace', 'Romeo and Juliet'],
    idade: 26
  }, {
    nome: 'Alice',
    livros: ['The Lord of the Rings', 'The Shining'],
    idade: 18
  }];
  

  var alllivros = amigos.reduce((prev, curr) => {
    return [...prev, ...curr.livros];
  }, ['Alphabet'] );