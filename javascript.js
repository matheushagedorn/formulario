function bloqueiaCaractere(input) {
  var n = /[^0-9-]/g; 
  if (n.test(input.value)) {
    input.value = "";
  }
}


function calculaRenda() {
  var inputsRenda = document.querySelectorAll('[id="renda"]');
  var total = 0;

  inputsRenda.forEach(function (input) {
    var valor = parseFloat(input.value);
    if (!isNaN(valor)) {
      total += valor;
    }
  });

  var totalFormatado = total.toFixed(2);

  var valorDividido = total / 2;
  var valorDivididoFormatado = valorDividido.toFixed(2);

  document.getElementById('resultado').value = totalFormatado;
  document.getElementById('resultado2').value = valorDivididoFormatado;
}