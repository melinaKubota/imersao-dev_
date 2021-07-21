// objeto = cachorro, atributo= cor, raça 
var paulo = {
    nome: "Paulo", // a virgula é para dar um espaço 
    vitorias: 2,
    empates: 5,
    derrota: 1, 
    pontos: 0,
}

var rafa = {
    nome:"Rafa", 
    vitorias: 3,
    empates: 5,
    derrota: 2,
    pontos: 0,
}

paulo.pontos = calculaPontos(paulo)
rafa.pontos = calculaPontos(rafa) // retorno, para ter a variavel para fora. o uqe esta sendo retornado esta sendo atribuido aqui

function calculaPontos(jogador) { 
 var pontos = (jogador.vitorias * 3) + jogador.empates
 return pontos
}
// no parenteses da function vou por o que esta fora para por dentro, no caso
// parametros - o  que entra na função
// retorno - sao as coisas que retorna

var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>"// += para ir somando os htmls. e é a mesa coisa "html+=" "html = html + "
     html += "<td>" + jogadores[i].vitorias + "</td>"
     html += "<td>" + jogadores[i].empates + "</td>"
     html += "<td>" + jogadores[i].derrota + "</td>"
     html += "<td>" + jogadores[i].pontos + "</td>"
     html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
     html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
     html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  // tr = table row; td=table date
  var tabelaJogadores = document.getElementById('tabelaJogadores') 
  tabelaJogadores.innerHTML = html 
}

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}


