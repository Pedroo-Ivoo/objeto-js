const listaCPFs = [1111111, 22222, 3333];
//Essa estrutura de lista para armazenar vários dados, não está errada, porém para buscar as informações.
//Devemos usar, por exemplo "informacoesPessoa[1]" se quiser acessar o nome, mas conforme foi escrito não quer dizer muita coisa.
// Porque no caso, nós sabemos o qual é o valor no indice 1, mas se fosse uma lista de um cadastro imenso? Então vamos aprender a usar os objestos.
const infomacoesPessoa = ["nome", "Pedro", "idade", 38, "CPF", "11225533"]
console.log(infomacoesPessoa[1])

//Veja que a sintaxe já mudou, acora estamos utilizando {} para guardar os elementos.
//Objetos é um uma entidade independente com algumas propriedades(informações dele) e tipos. 
//Chamamos a propriedade de chave e valor onde CHAVE é o NOME e o  VALOR é o que está guardado "Pedro"
//Aqui não importa a ordem de declaração pois não acessamos como funciona nas arrays.
const objetoPessoa ={
    nome: "Pedro",
    idade: 32,

}