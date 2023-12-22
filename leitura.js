//O Formato Json é utilizado quando temos um conjunto de configurações ou um padrão que queremos inserir no nosso código, acessando-o em outros lugares . 
//Permite também,transformar um objeto em uma string e transmitir esses dados de um sistema para outro

const dados = require("./cliente.json");
//Require é uma função que nos permite usar um código de outro lugar, mas há diversas outras funções.
console.log(dados)

console.log(typeof dados)

//é possível escrever a partir de um objeto um texto no formato json. Na forma que está escrito ele retorna o conteudo  do json em string.
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString)

//Para transformar esse clienteEmString e de volta ao formato objteto. utilizamos o ".parse" que irá verificar o conteudo da string e remontá-la em objeto.

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente)