var numeroSecreto;
var contador = 0;

for (i = 0; i <= 100; i++) {
  numeroSecreto = parseInt(Math.random() * 101);
}
function Tentativas7() {
  Tentativas();
  if (contador == 7) {
    resultado.innerHTML =
      "Suas tentativas acabaram. O número secreto era " + numeroSecreto;
  }
}
function Tentativas() {
  var tentativas = document.getElementById("tentativas");
  tentativas.innerHTML = "Você tem mais " + (7 - contador) + " tentativas";
}

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  while (contador < 7) {
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Acertou!";
      break;
    } else if (chute > 100 || chute < 0) {
      alert("O número deve ser entre 0 e 100");
      break;
    } else if (chute > numeroSecreto) {
      resultado.innerHTML = "O número secreto é menor";
      Tentativas();
      contador = contador + 1;
    } else if (chute < numeroSecreto) {
      resultado.innerHTML = "O número secreto é maior";
      Tentativas();
      contador = contador + 1;
    }
    Tentativas7();
    break;
  }
}
