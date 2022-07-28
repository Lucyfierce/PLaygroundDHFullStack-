//modulo02

//introducao a node e javascript

//variaveis
//ex01
let exemplo = function () {
  return "Oi, eu sou uma função expressa";
};

//ex02
const IDADE_MINIMA = 18;
const IDADE_MAXIMA = 99;

//tipos de dados
//ex01
let verdadeiro = true;
console.log(verdadeiro);

let nada = null;
console.log(nada);

let texto = "string";
console.log(texto);

let numero = 4;
console.log(numero);

//condicionais
//ex01
let dado = true;
if (dado == true) {
  console.log("é verdadeiro");
} else {
  console.log("é falso!");
}

//ex02
let linguagem = "javascript";
if (linguagem === "javascript") {
  console.log("Estou aprendendo");
} else {
  console.log("Vou aprender mais pra frente");
}

//metodos de arrays I
let alunos = ["João", "Pedro", "Jorge", "Francisco"];
let indiceJoao = alunos.indexOf("João");
let indiceFrancisco = alunos.indexOf("Francisco");

//sistema de modulos
//ex01
let moduloNativo = require("http");
let moduloInstalado = require("axios");
let moduloProprio = require("./minhaFuncao");

//ex02
let cachorro = {
  nome: "Scooby",
  idade: 7,
  gostaDeComer: true,
};
module.exports = cachorro;

//metodos de strings
function dominio(url) {
  return "http://" + url;
}

//arrrow functions
let cincoNumeros = () => [1, 2, 3, 4, 5];
let multiplicarPorDois = (numero) => 123 * 2;
let mostrarNome = () => "Meu nome é Ryan Dahl";

//condicionais if ternario/switch
//ex01
let dado = true;
if (dado == "segunda") {
  console.log("É verdadeiro");
} else {
  ("É falso!");
}

//ex02
let dia = "sabado";

function fimDeSemana(dia) {
  switch (dia) {
    case "segunda":
      console.log("Você tem aulas!");
      break;
    case "terça":
      console.log("Você tem aulas!");
      break;
    case "quarta":
      console.log("Você tem aulas!");
      break;
    default:
      console.log();
  }
}

//ex03
let dia = "segunda-feira";

function fimDeSemana(dia) {
  switch (dia) {
    case "sexta-feira":
      console.log("Bom fim de semana!");
      break;
    case "segunda-feira":
      console.log("Boa semana!");
      break;
    default:
      console.log("Bom dia!");
  }
}

//ciclo for
function papagaio (texto){
    for (let i = 0; i<=4; i++)
    console.log(texto)
}

//callbacks
//ex01
function dobro(number){
    return number * 2;
}
function triplo(number){
    return number * 3;
}
function aplicar(valor, callback){
    return callback(valor);
}

//ex02
function somar (numA, numB) {
    return numA + numB 
}
function subtrair (numA, numB) {
    return numA - numB 
}
function multiplicar (numA, numB) {
    return numA * numB 
}
function dividir (numA, numB) {
    return numA / numB 
}
function calculadora (numA, numB, operacao)  {
    return operacao (numA, numB)
    
}

//ex03
function adicionarHttp(url) {
    return "http://" + url
}
function processar(listaUrl, callback){
    const novoArray = []
    for(let i = 0; i < listaUrl.length; i++){
        const urlModificada = callback(listaUrl[i])

        novoArray.push(urlModificada)
    }
    return novoArray
}

//metodos de arraysII
let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = numeros.filter(function (valor, index) {
    return valor > 18;
})
console.log (maiores)

//ciclos II for in/for out
//ex01
let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}
for(let valores in bart)
console.log (bart [valores])

//ex02
let frase = "Essa semana vou no colearning";

for (let valor of frase) {
console.log(valor)
}

//objeto date
let data = new Date('February 13, 1996');
data.setDate(13);
data.setMonth(2);
data.setFullYear(1996);
console.log(data);

//destructuring
let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [, bariloche, ,china] = destinosIncriveis;

