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
//vamos supor que temos que utilizar uma função externa e que vamos ter que usa-la para ligar para os clientes

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}
//Para o espalhamento utilizamos os ... antes da declaração que ele irá retornar o quantos itens tem no array.
ligaParaCliente(...cliente.telefone)

//vamos agora ver com objtos. No caso do endereço. podemos utilizar o operador de espalhamento que ele retonar o conteudo aninhado.

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],

}
console.log(encomenda)