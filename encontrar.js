//Vamos utilizar uma lista de clientes em um arquivo json para poder criar uma função para localizar clientes isoladamente.
//Aqui importamos a lista
const clientes = require("./clientes.json");

//Criamos a funçãp que utiliza três parametros "lista" referente a lista que vamos consultar, no nosso caso clientes.
//chave pelo fato de nossos dados estarem em um array no arquivo json, que nos facilita a busca.
//o valor é conteudo da busca.
function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
  }

const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "email", "olippini0@deviantart.com");

console.log(encontrado2)