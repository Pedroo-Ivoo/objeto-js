//Vamos supor que o cliente realizou uma compra e temos que validar o endereço para que possa ser concluida a compra.

const cliente ={
    nome: "João",
    idade: 25,
    email: "firma@firma.com",
    telefone: ["148989789", "149898987"]
}
cliente.enderecos = [{
    rua: "Engraçada",
    numero: 158,
    apartamento: true,
    complemento: "ap 147",
}]
// Aqui vamos criar uma variavel que ira retornar pra gente todas as ches que foram criadas naquela variavel que está sendo verificada.
//object.keys() vai retornar um array com todas as chaves. Dentro desse array podemos verificar a validação do endereço está correta.

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if(!chavesDoObjeto.includes("enderecos")){
console.error("Erro! É necessário ter um endereço cadastrado.")
}