//Aninhados é quando estamos escrevendo um código dentro do outro.

const cliente ={
    nome: "João",
    idade: 25,
    email: "firma@firma.com",
    telefone: ["148989789", "149898987"]
}
//´É possível guardar um objeto dentro de outro objeto. No exemplo abaixo inserimos o campo endereço no cadastro como um objeto que ficará inserido dentro do objeto cliente.
cliente.endereco = {
    rua: "Engraçada",
    numero: 158,
    apartamento: true,
    complemento: "ap 147",
}
//Aqui estamos consultando o objeto endereço. É possível consultar dentro do objeto endereço as suas propriedade, basta adicionar o ."propriedade" ex. cliente.endereco.rua

console.log(cliente.endereco)