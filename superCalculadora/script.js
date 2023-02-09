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

function Calcular(A, B) {
  var A = Number(document.getElementById('A').value);
  var B = Number(document.getElementById('B').value);
  var soma = A + B;
  var subtracao1 = A - B;
  var subtracao2 = B - A;
  var divisao1 = (A / B).toFixed(2);
  var divisao2 = (B / A).toFixed(2);
  var potencia1 = A ** B;
  var potencia2 = B ** A;
  var raiza = Math.sqrt(A).toFixed(2);
  var raizb = Math.sqrt(B).toFixed(2);
  var porcent1 = ((A * 100) / B).toFixed(2);
  var porcent2 = ((B * 100) / A).toFixed(2);
  var media = (A + B) / 2;
  var fatA = fatorialA(A);
  var fatB = fatorialB(B);

  alert(
    'Soma: ' +
      soma +
      '    Substração A-B: ' +
      subtracao1 +
      '    Substração B-A: ' +
      subtracao2 +
      '    Divisão A/B: ' +
      divisao1 +
      '    Divisão B/A: ' +
      divisao2 +
      '    Potenciação A^B: ' +
      potencia1 +
      '    Potenciação B^A: ' +
      potencia2 +
      '    Raiz Quadrada A: ' +
      raiza +
      '    Raiz Quadrada B: ' +
      raizb +
      '    Porcentagem A rel B: ' +
      porcent1 +
      '    Porcentagem B rel a: ' +
      porcent2 +
      '    Média: ' +
      media +
      '    Fatorial de A: ' +
      fatA +
      '    Fatorial de B: ' +
      fatB
  );
}
