const cliente = {
  nome: "Alice",
  idade: 33,
  cpf: "1457898556",
  email: "alice@dominio.com",
};
//Precisamos criar uma mensagem personalizada para este cliente. Podemos utilizar o nome da variavel seguida de ponto o valor que se quer.

console.log(
  `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`
);

//É possivel chamar métodos desse valor que a gente recebeu. No caso queremos saber apenas os três primeiros digitos do cpf. Utilizamos o método substring() passando os paramentros 0 e 3

console.log(`Os tres primeiros digitos do cpf desse cliente são ${cliente.cpf.substring(0,3)}`)
