// nao e uma boa pratica chamar uma variavel de uma function fora de seu escopo
let z = 5;

function soma(x, y) {
    return x + y + z;
}

console.log(soma(5, 3));