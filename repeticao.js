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
//como fazemos para percorrer o array? podemos usar o laço do tipo for(let chave in cliente) que ira nos retornar as chaves das nossas propriedades.
//Se usamos no console (clientes[chaves]) estaremos acessando o valor que tem nas chaves.
//Para imprimir um relatorio para realacionar as chave e valor usamos uma template strings (`A chave ${chave} tem o valor ${cliente[chave]}`). Porem há um erro no objeto endereço.
//Como solução a gente pode implementar um if combinado com o typeof para que retorne apenas o que não for do tipo objeto ou função.
for(let chave in cliente){
    let tipo = typeof cliente[chave]
    if(tipo !== "object" && tipo !== "function"){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)}
}