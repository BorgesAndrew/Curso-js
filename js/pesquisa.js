let nome = ['Maria','João','Pedro','José','Flávio','Fernanda','Marta'];

let pesquisa = prompt ("Pesquisa: ");

let regExp = new RegExp(pesquisa,'ig');

let resultado = nome.filter(valor=>regExp.test(valor));

alert('Resultado da Pesquisa: ' + resultado);