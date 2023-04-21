function verificarTriangulo(){
    const ladoa = document.getElementById("ladoa").value
    const ladob = document.getElementById("ladob").value
    const ladoc = document.getElementById("ladoc").value
    const base = parseFloat(document.getElementById("base").value)
    const altura = parseFloat(document.getElementById("altura").value)
    var calc = (ladoa < (ladob + ladoc) && ladob < (ladoa + ladoc) &&  ladoc < (ladoa + ladob))
    var areaT = (base*altura)/2
    if(calc){
        resultado.textContent ="é um triangulo e a area dele é: "+areaT

    }
    else{
        resultado.textContent ="nao é um triangulo"
    }
}

function verificarQuadrado(){
    const lado = document.getElementById("lado").value
    var areaQ = lado*lado
    quadrado.textContent="a area do quadrado é: "+areaQ


}

function verificarTrapezio(){
    const baseMenor = document.getElementById("baseMenor").value
    const baseMaior = document.getElementById("baseMaior").value
    const altura = document.getElementById("altura").value
    var resultado = ((baseMaior+baseMenor)*altura)/2
    trapezio.textContent="a area do trapezio"

    
}

function verificarCirculo(){
    const raio = parseFloat(document.getElementById("raio").value)
    var pi = 3.14
    var area = pi*(raio*raio)
    circulo.textContent="A area do circulo é: " +area
}










/* JS */

const $form = document.querySelector('form');
const $a = document.querySelector('#a');
const $b = document.querySelector('#b');
const $c = document.querySelector('#c');
const $x1 = document.querySelector('#x1');
const $x2 = document.querySelector('#x2');

function bhaskara() {
    const a = $a.value;
    const b = $b.value;
    const c = $c.value;

  const delta = b * b - 4 * a * c;

    if (!a || !b || !c) {
    createAlert('Insira os valores de a, b e c');
    } else if (a == 0) {
    createAlert('O valor de <strong>a</strong>, deve ser diferente de 0');
    } else if (delta < 0) {
    createAlert('Sem raízes reais');
    } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    $x1.value = x1;
    $x2.value = x2;
    }
}

function createAlert(msg) {
    document
    .querySelector('body')
    .insertAdjacentHTML('beforebegin', `<div class='alert'>${msg}</div>`);

setTimeout(function () {
    deleteAlert();
}, 3000);
}

function deleteAlert() {
    const list = document.querySelectorAll('.alert');
    for (const item of list) {
    item.remove();
}
}

$form.addEventListener('submit', function (event) {
    event.preventDefault();
    bhaskara();
});