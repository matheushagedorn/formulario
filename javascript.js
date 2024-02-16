function bloqueiaCaractere(input) {
  var n = /[^0-9-]/g; 
  if (n.test(input.value)) {
    input.value = "";
  }
}


function calculaRenda() {
  const inputsRenda = document.querySelectorAll('[id="renda"]');
  let total = 0;

  inputsRenda.forEach(input => {
    const valor = parseFloat(input.value);
    if (!isNaN(valor)) {
      total += valor;
    }
  });

  const totalFormatado = `R$ ${total.toFixed(2)}`;
  const valorDivididoFormatado = `R$ ${(total / 2).toFixed(2)}`;

  document.getElementById('resultado').value = totalFormatado;
  document.getElementById('resultado2').value = valorDivididoFormatado;
}

