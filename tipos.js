const cliente ={
    nome: "João",
    idade: 25,
    email: "firma@firma.com",
    telefone: ["148989789", "149898987"]
}
//Se nós tivessimos que ter mais de um telefone no cadastro? Poderiamos utilizar as listas para ir adicionando
console.log(cliente)
//É possível utilizar o push() para incluir novos números na lista.
cliente.telefone.push("14989565")

console.log(cliente)