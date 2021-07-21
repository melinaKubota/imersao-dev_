var valorEmDolarTexto = prompt('Qual o valor em dólar que você quer converter?')

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmReal)

// site usado para converter dolar em real
// Revisão
// var = variaveis - onde vamos guardar valores que a gente deseja: numero (inteiros: parseInt; casa decimal: parseFloat); string: entre as aspas que a gente digita qualquer texto para aparecer na tela 
// alert - joga na tela qualquer informação; parrseInt; parseFloat; prompt (tipo um alert, mas nesse conseguimos receber um valor la dentro);
// operaçoes = + somar; * multiplicar