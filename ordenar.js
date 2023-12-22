const clientes = require("./clientes.json");

function ordenar(lista, propriedades) {
    const resultado = lista.sort((a, b)=>{
        if(a[propriedades] < b[propriedades]){
            return -1;
        };
        if(a[propriedades] > b[propriedades]){
            return 1
        };
        return 0;
    })    
    return resultado;
}

const ordenadoPorNome = ordenar(clientes, "nome");

console.log(ordenadoPorNome)