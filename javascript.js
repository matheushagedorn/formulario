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
  
  var valorDividido = total / 2;

  document.getElementById('resultado').value = total;
  document.getElementById('resultado2').value = valorDividido;
}