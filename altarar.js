const pessoa = {
    nome: "Pedro",
    profissao: "Engenheiro",
}

console.log(pessoa.nome);

//E se a gente buscar a o telefone dessa pessoa. Vai retornar undefined porque esse valor não foi definido.

console.log(pessoa.telefone);

//Se a for declarado fora da variavel. ele iria aparecer no proximo console, mas não acontece o hoisting, ou seja, não vai "subir" para o inicio do código, sendo aplicado apenas após a declaração.

pessoa.telefone = "14 2524655";

console.log(pessoa.telefone)

//Podemos alterar uma propriedade que já foi declarada. E quando consultamos a variavel, iremos ver todas as alterações e inclusões feitas.

pessoa.nome = "Pedro Ivo"
console.log(pessoa)