function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')// document.querSelector, esta indo no HTML e estamos pedindo para selecionar o que esta entre parenteses, no caso colocamos o # silbolizando o id do HTML no caso "id=filme"
    //pegamos a variavel campo filme favorito e estamos atribuindo a ela o que selecionarmos do HTML que tenha id filme. ou seja estamos colocando dentro dessa variavel todo o input 
    var filmeFavorito = campoFilmeFavorito.value // no value estamos ingnorando tods as informaçoes do input, se ele é texto e tudo mais, mas so considerar o valor que esta digitando no campo
    if (filmeFavorito.endsWith('.jpg')){
      listaFilmesNaTela(filmeFavorito)
    } else {
      alert("imagem invalida")
    }
    campoFilmeFavorito.value = ""
  }
  
  function listaFilmesNaTela(filme) {
    var listaFilmes = document.querySelector("#listaFilmes")
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }
  
  
  