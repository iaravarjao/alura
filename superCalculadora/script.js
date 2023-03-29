const soma = document.getElementById('soma');
const subtracao1 = document.getElementById('subtracao1');
const subtracao2 = document.getElementById('subtracao2');
const divisao1 = document.getElementById('divisao1');
const divisao2 = document.getElementById('divisao2');
const potencia1 = document.getElementById('potencia1');
const potencia2 = document.getElementById('potencia2');
const raiza = document.getElementById('raiza');
const raizb = document.getElementById('raizb');
const porcent1 = document.getElementById('porcent1');
const porcent2 = document.getElementById('porcent2');
const media = document.getElementById('media');
const fatA = document.getElementById('fatA');
const fatB = document.getElementById('fatB');

soma.innerHTML = 0;
subtracao1.innerHTML = 0;
subtracao2.innerHTML = 0;
divisao1.innerHTML = 0;
divisao2.innerHTML = 0;
potencia1.innerHTML = 0;
potencia2.innerHTML = 0;
raiza.innerHTML = 0;
raizb.innerHTML = 0;
porcent1.innerHTML = 0;
porcent2.innerHTML = 0;
media.innerHTML = 0;
fatA.innerHTML = 0;
fatB.innerHTML = 0;

function calcularSoma(x, y) {
  return x + y;
}
function calcularSubtracao1(x, y) {
  return x - y;
}
function calcularSubtracao2(x, y) {
  return y - x;
}
function calcularDivisao1(x, y) {
  return x / y;
}
function calcularDivisao2(x, y) {
  return y / x;
}
function calcularPotencia1(x, y) {
  return Math.pow(x, y);
}
function calcularPotencia2(x, y) {
  return Math.pow(y, x);
}
function calcularRaiz1(x) {
  return Math.sqrt(x).toFixed(2);
}
function calcularRaiz2(y) {
  return Math.sqrt(y).toFixed(2);
}
function calcularPorcent1(x, y) {
  return ((x * 100) / y).toFixed(2);
}
function calcularPorcent2(x, y) {
  return ((y * 100) / x).toFixed(2);
}
function calcularMedia(x, y) {
  return (x + y) / 2;
}
function fatorialA(na) {
  if (na === 0 || na === 1) return 1;
  for (var i = na - 1; i >= 1; i--) {
    na *= i;
  }
  return na;
}
function fatorialB(nb) {
  if (nb === 0 || nb === 1) return 1;
  for (var i = nb - 1; i >= 1; i--) {
    nb *= i;
  }
  return nb;
}

function Calcular() {
  const A = Number(document.getElementById('A').value);
  const B = Number(document.getElementById('B').value);

  soma.innerHTML = calcularSoma(A, B);
  subtracao1.innerHTML = calcularSubtracao1(A, B);
  subtracao2.innerHTML = calcularSubtracao2(A, B);
  divisao1.innerHTML = calcularDivisao1(A, B);
  divisao2.innerHTML = calcularDivisao2(A, B);
  potencia1.innerHTML = calcularPotencia1(A, B);
  potencia2.innerHTML = calcularPotencia2(A, B);
  raiza.innerHTML = calcularRaiz1(A);
  raizb.innerHTML = calcularRaiz2(B);
  porcent1.innerHTML = calcularPorcent1(A, B);
  porcent2.innerHTML = calcularPorcent2(A, B);
  media.innerHTML = calcularMedia(A, B);
  fatA.innerHTML = fatorialA(A);
  fatB.innerHTML = fatorialB(B);
}
