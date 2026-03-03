import promptSync from "prompt-sync";

const prompt = promptSync();

let valores: number[] = [];
let loop: number = 1
do
{
     console.log(`Option 0: Sair`);
     console.log(`Option 1: Calcular IBM `);
     console.log(`Option 2:  Historico de Consultas`)
let option: number = Number(prompt("Digite uma opção: "));

if (option == 0) {
      console.log(`tchau!`);
      loop = 0
}
if (option == 1)
{
     let peso: number = Number(prompt("Digite seu peso: "));
     let altura: number = Number(prompt("Digite sua altura: "));
     let IBM: number
     IBM = peso / (altura * altura);
     console.log(IBM);
     valores.push(IBM);
     console.log(valores)
}
if (option == 2)
{
     console.log(valores)
}
}while(loop != 0);