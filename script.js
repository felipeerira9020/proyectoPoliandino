// variables del contador de certificados
let contador = document.querySelector(".numero1");
let contador1 = document.querySelector(".numero2");
let contador2 = document.querySelector(".numero3");
let contador3 = document.querySelector(".numero4");
let sectionContador = document.querySelector(".contador")
let num = 0;
contador.innerHTML = num;
let num1 = 0;
contador1.innerHTML = num1;
let num2 = 0;
contador2.innerHTML = num2;
let num3 = 0;
contador3.innerHTML = num3;

sectionContador.addEventListener("mouseover", function () {
    let timer = setInterval(function () {
        if (num > 864) {
            clearInterval(timer)
        } else
            num++
        contador.innerHTML = num;
    }, 0.6)
})
sectionContador.addEventListener("mouseover", function () {
    let timer = setInterval(function () {
        if (num1 > 468) {
            clearInterval(timer)
        } else
            num1++
        contador1.innerHTML = num1;
    }, 10)
})
sectionContador.addEventListener("mouseover", function () {
    let timer = setInterval(function () {
        if (num2 > 1468) {
            clearInterval(timer)
        } else
            num2++
        contador2.innerHTML = num2;
    }, 0.00001)
})

sectionContador.addEventListener("mouseover", function () {
    let timer = setInterval(function () {
        if (num3 > 32) {
            clearInterval(timer)
        } else
            num3++
        contador3.innerHTML = num3;
    }, 100)
})