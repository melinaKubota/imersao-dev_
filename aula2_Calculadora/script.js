var primeiroValor = parseInt(prompt("digite o primeiro valor:"))// primeiro valor inteiro peruntado. poderia ter sido var primeiroValorInt= parseInt(primeiroValor)
var segundoValor = parseInt(prompt('digite o segundo valor:'))// segundo valor inteiro perguntado


var operação = prompt('Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração:')

if (operação == 1) {
      var resultado = primeiroValor / segundoValor 
      document.write('<h2>' + primeiroValor + " / " + segundoValor + " = " + resultado)// resposta que temos dentro da calculadora visto que esta lincada com o h2 do html
} else if (operação == 2) {
      var resultado = primeiroValor * segundoValor
      document.write('<h2>' + primeiroValor + ' X '+ segundoValor + ' = ' + resultado)
} else if (operação == 3) {
      var resultado = primeiroValor + segundoValor
      document.write('<h2>' + primeiroValor + " + " + segundoValor + " = " + resultado)
} else if (operação == 4) {
      var resultado = primeiroValor - segundoValor
      document.write('<h2>' + primeiroValor + ' - ' + segundoValor + ' = ' + resultado)
} else {
  document.write('<h2>Opção invalida</h2>')
}
      
//if = se
// else - se não
// document.write() - escrevendo na tela 
// concatenação (juntar palavra com variaveis) - ("palavra" + variavel)
// == - utilizado para comparação que é diferente do = usado para realizar atribuição 