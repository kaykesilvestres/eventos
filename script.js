//funções -

/*

alert ()
prompt()
console.clear()
console.log()
confirm()
for()
while()
if()
else()
 sintaxe funções

 função simples 

 function nomedafunção(){
 // oque será feito
 
 
 }

// função simples

 */
/* 
function saudacao(){
    alert("bem vindo ao meu site")
}


// função com parametros

function soma(valor1, valor2){
  let resultado = valor1 + valor2
  return resultado
  //para retorna algo dentro de uma função usamos o "retrun"

}
console.log(soma(50,70)) 

console.log(soma(20,70))

console.log(soma(190,200))

console.log(soma(50,50))

function dobro(n2){
    let resultado = n2 + n2
    return resultado
    
}



function saudacao(){
    let nome = prompt("qual seu nome")
    alert(`ola ${nome}`)
}
saudacao()*/

function desconto(){
    let preço = Number (prompt("qual é o preço do produto em R$"))
    let desconto = Number (prompt("digite o quanto por % do desconto "))
    let valorfinal = preço-(preço *(desconto/100))

    return `o valor de desconto que voce escolheu foi ${desconto}% com isso o valor final vai ser  ${valorfinal}`
}
console.log(desconto())