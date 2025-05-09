// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
let nome = "Lucas"
let idade = 16
let espaco = " "


// Console e Debug
console.log(nome)
console.log(idade)
nome = "Aldalberto"
idade = 20
console.log(nome, idade)


// Tipos de dados
// texr==string
let cidade = "americana"

//numerico == number
let salario = 1500.35

// booleano == boolean
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição(=)
//     Operadores aritméticos(+, -, /, *, %)
console.log(10 + 15)
let n1 = 10
let n2 = 5
console.log(n1 + n2)  //soma
console.log(n1 - n2)  //subtração
console.log(n1 * n2)  //multiplicação
console.log(n1 / n2)  //divisão
console.log(n1 % n2)  //resto da divisão
console.log(espaco)
//     Operadores relacionais(>, <, >=, <=, ==, !=)
console.log(n1==n2) //igualdade
console.log(n1!=n2) //diferente
console.log(n1>n2) //maior
console.log(n1<n2) //menor
console.log(n1>=n2) //maior ou igual
console.log(n1<=n2) //menor ou igual
console.log(espaco) 
//     Operadores lógicos(!, &&, ||)
console.log(!10>2) // ! - inverte o resultado, ser for verdadeiro vira falso, se for falso vira verdadeiro
console.log(!false)
console.log(10>2 && 35<100 && n1>n2) // && - todas as verificações precisam ser verdadeiras para o resultado ser verdadeiro
console.log(10>2 || 100==150 || 57==57) // || - apenas uma verificação precisa ser verdadeira para o resultado ser verdadeiro
console.log(espaco)

// desafio
let preco = 100
let precoAcrescimo = 117
let precoDesconto = 93
// faça um codigo que acrescente 17% ao preco e inprima
// faça um codigo que desconte 7% do preco e imprima 
console.log(preco + (preco*0.17)) // acrescimo
console.log(preco - (preco*0.07)) // desconto   
console.log("Preço original: " + preco)
console.log("Preço com acrescimo: " + 117)
console.log("Preço com desconto: " + 93)
console.log("Preço com acrescimo: " + precoAcrescimo.toFixed(2))
console.log("Preço com desconte: " + precoDesconto.toFixed(2))
console.log(espaco)

// Estrutura
//     Estrutura de controle/decisão
if (10>100){
    console.log("10 é maior que 100")
}
else{
    console.log("10 não é maior que 100")
}

let idadeDoCandidato = 20
if (idadeDoCandidato >= 18){
    console.log("pode dirigir")
}else{
    console.log("volte mais tarde")
}

let salariofunc =3000
let aumento = 5000 - salariofunc
//desafio
// faça um codigo e verifique se o salário do funcionario é maior que 5000, se for mostre a mensagem "salario ok" se nao mostre a mensagem "precisa de um aumento de x reais"
if (salariofunc > 5000){
    console.log("salario ok")
}else{
    console.log("precisa de um aumento de", aumento.toFixed(2))
} 


//     Laços de repetição
// quero mostrar 10 vezes a mensagem "senac americana"
let controle = 0
while (controle >= 10){
    console.log("senac americana")
    controle = controle + 1
}

controle = 0
while (controle <= 100){
    console.log(controle)
    controle = controle + 0
}
// Arrays 

// Funções básicas
// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
 