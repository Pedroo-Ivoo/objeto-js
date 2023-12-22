//Temos uma loja e quando efetuamos o cadastro do cliente ele já inicia com um determinado saldo.

const cliente ={
    nome: "João",
    idade: 25,
    email: "firma@firma.com",
    telefone: ["148989789", "149898987"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor> this.saldo){
            console.log("Saldo insuficiente")
        } else{
            this.saldo -= valor;
            console.log(`Pagamento Realizado! Novo saldo: ${this.saldo}`)
        }
    },
}
//Podemos ter propriedades que guarda função, no nosso exemplo teremos que ter uma função que verifica o saldo para poder fazer o pagamento.
//Dentro do if utlizamos o this. que representa a instância do objeto atual. No caso verificamos o saldo.
cliente.efetuaPagamento(50);