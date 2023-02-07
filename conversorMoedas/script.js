function conversorMoeda(converter) {
  var nome = document.getElementById('nome').value;
  var converter = document.getElementById('converter').value;
  var cotacaoDoDolar = 5.32;
  var cotacaoCripto = 0.0000420453551655;

  var valorEmReal = converter * cotacaoDoDolar;
  var valorBitcoin = converter * cotacaoCripto;
  valorEmReal = valorEmReal.toFixed(2);
  valorBitcoin = valorBitcoin.toFixed(2);
  alert(
    'Olá ' +
      nome +
      ', este valor de: USD' +
      converter +
      ' convertido em reais equivale a R$' +
      valorEmReal +
      ' ou ' +
      valorBitcoin +
      ' bitcoins'
  );
}
