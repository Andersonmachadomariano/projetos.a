//circuito alternado
//entrada
function calcularCircuito() {
var r1 = document.querySelector("#r1").value
var r2 = document.querySelector("#r2").value
var r3 = document.querySelector("#r3").value
var font= document.querySelector(".font").value
var c1 = document.querySelector("#c1").value
var resultado = document.querySelector("#resultado")
//calculo
resultado = r1 + r2 + r3 
resultado = Number(resultado)
//saida
font = Number(font)
var calcular = font / resultado
console.log(calcular)
    //mostrar na tela
    resultado.textContent = `${calcular} em OHM`
}
c1.addEventListener("click", calcularCircuito)



//entrada
//circuito paralelo
function calcularCircuito() {
var r1 = document.querySelector("#r1t1").value
var r2 = document.querySelector("#r1t2").value
var r3 = document.querySelector("#r1t3").value
var font2 = document.querySelector(".font2").value
var c2 = document.querySelector("#c2").value
var resultado2 = document.querySelector("#resultado2")
var resultado1
var calculo


//calculo do r1, r2 e r3
resultado1 = (r1 / 1) + (r2 / 1) + (r3 / 1)
resultado2 = (r1 + r2 + r3)
resultado2 = Number(resultado2)
resultado2 = resultado1 * resultado2
//saida
font2 = Number(font2)
console.log(calculo)
    //mostrar na tela
    resultado2.textContent = `${calculo} em OHM`
}
c2.addEventListener("click", calcularCircuito)