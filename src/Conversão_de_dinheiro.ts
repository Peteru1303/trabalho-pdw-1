import promptSync from "prompt-sync";

const prompt = promptSync();

const nome: string = prompt("digite seu nome");
const idadee: number = Number(prompt("digite sua idadee: "));

console.log(`Olá, $(nome)! Você tem $(idadee) anos.`);

let a: number = 10;
let b: number = 5;

console.log("Soma: ", a + b);
console.log("Subtração: ", a - b);
console.log("Multiplicação: ", a * b);
console.log("Divisão: ", a / b);
console.log("Módulo: ", a % b);
console.log("Exponenciação: ", a ** b);
console.log("Igualdade: ", a == b);
console.log("Igualde estrita: ", a === b);

a++; // a = a + 1
a += b; // a = a + b

let numbers: number[] = [1, 2, 3, 4, 5];

let nomes: string[] = ["Ana", "Anisio", "Raul"];

let posRaul = nomes.indexOf("Rauls");

nomes.splice(1)

console.log(nomes)

let idade: Array<number> = [20, 30, 40]

let mist: (number | string)[]= [1, "dois", 3, "quatro"]

nomes.push("Rafael")
nomes.unshift("Aldaberto")

nomes.pop();
nomes.shift();

console.log(nomes[0]);
console.log(nomes.length)

for(let i = 0; i < 5; i++){
    console.log(`Iteração: ${i}`)
}

let contador = 0;
while (contador < 5){
    console.log(`Iteração: ${contador}`)
    contador++;
}

do{
    // desencolvimento...
}while(contador < 3);

const numeros = [10, 20, 30]

for(const num of numeros){
    console.log("Numeros: ", num);
}

// const pessoa = {nome: "Anisio", idade: 25, cidade: "Boituva"};
// for( const chave in pessoa){

// }