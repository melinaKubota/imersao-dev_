var numeroSecreto = parseInt(Math.random() * 3)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 3"))

  if (numeroSecreto == chute) {
    alert("Acertou") 
    break
  } else if (chute > numeroSecreto) {
    alert("O número sercreto é menor")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior")
    tentativas = tentativas - 1 
  }
}// fim da chave while

if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
}
    
  