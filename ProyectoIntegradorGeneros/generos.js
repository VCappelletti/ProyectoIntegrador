window.onload = function() {

  var urlParams = new URLSearchParams(window.location.search);
  var genero = urlParams.get('genero');

var elmnt = document.getElementById(genero);
elmnt.scrollIntoView({behavior: 'smooth'});
}
//Buscador//
window.addEventListener("load", function(){

  var urlSearchParams = new URLSearchParams(window.location.search)
  var buscador = urlSearchParams.get('buscador')
  console.log(buscador);

  var API_KEY = "928ad4dee3a02646fa1725b8bcaa2a96"
  var url = "https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&language=en-US&query="+buscador+"&page=1&include_adult=false"
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);
      //GUARDO EL ARRAY DE PELIS
      var arrayDePeliculas = objetoLiteralRespuesta.results
      // CAPTURO EL UL
      var ul = document.querySelector('section ul')

      var li = ""
      // PARTE FIJA DE LA URL DE LA IMAGEN
      var urlImg = "https://image.tmdb.org/t/p/original"
      // RECORRO EL ARRAY DE PELIS
      for (var i = 0; i < arrayDePeliculas.length; i++) {
          li = "<li>"
          li +="<a href='detalles.html?idPelicula="+arrayDePeliculas[i].id+"'>"
          li +=   "<p>"+arrayDePeliculas[i].title+"</p>"
          li +=   "<img src='"+urlImg + arrayDePeliculas[i].poster_path+"' style='width:100%;'>"
          li +="</a>"
          li += "</li>"

          ul.innerHTML += li
      }
    })
    .catch(function(error) {
      console.log("the error was: " + error);
    })

})
