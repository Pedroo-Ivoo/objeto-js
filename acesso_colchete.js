const cliente = {
    nome: "Alice",
    idade: 33,
    cpf: "1457898556",
    email: "alice@dominio.com",
  };
  //Precisamos criar uma mensagem personalizada para este cliente. Neste caso vamos acessar o valor de forma diferente do que usamos no acesso.ponto, vamos utilizar as colchete após o nome da variavel.
  //É utilizado quando não sabemos os nomes das chaves.
  
  console.log(
    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`
  );
  //Veja o exemplo abaixo que torna o uso do por meio do colchetes mais complexos, quando não sabemos os valores.
  //Temos uma lista com valores que será percorida pelo for.each e no console teremos o uso da colchetes para mostrar qual item é no cliente.
  const chaves = ["nome", "idade", "cpf", "email"]

  chaves.forEach((chave)=>{
    console.log(`A chave ${chave} tem valor de ${cliente[chave]}`)
  })

  //E se tentarmos acessar alguma prorpriedade que não temos  ele ira retornar undefined
  const chaves1 = ["nome", "idade", "cpf", "email", "altura"]

  chaves1.forEach((chave)=>{
    console.log(`A chave ${chave} tem valor de ${cliente[chave]}`)
  })