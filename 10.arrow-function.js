//hoisting (içamento) -> antes de rodar o codigo o Node reconhece e iça as funções.
console.log(soma(5, 2));

//declaracao tradicionals
function soma(x, y) {
    //codigo
    const resultado = x + y;
    return resultado;
}

//declaracao com arrow-function
const soma = (x, y) => {
    //codigo
    const resultado = x + y;
    return resultado;
}

console.log(soma(5, 2));