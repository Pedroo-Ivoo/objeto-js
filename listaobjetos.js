const cliente ={
    nome: "João",
    idade: 25,
    email: "firma@firma.com",
    telefone: ["148989789", "149898987"]
}
//Podemos criar lista de objetos. No caso poderemos ter mais de um endereço. Assim, usamos colchetes antes das chaves.
cliente.enderecos = [{
    rua: "Engraçada",
    numero: 158,
    apartamento: true,
    complemento: "ap 147",
}]
//Como Estamos usando uma array podemos utilizar os métodos de array para incluir um novo objeto. Utilizando as chaves dentro dos parenteses
cliente.enderecos.push({
    rua: "Dois",
    numero: 987,
    apartamento: false,
})

//Podemos usar outros métodos de array para criar outras listas a partir do que temos, por exemplo, podemos usar o método const.

const listaApenasApartamentos =cliente.enderecos.filter(
    (enderco) => enderco.apartamento === true
)
console.log(listaApenasApartamentos);

