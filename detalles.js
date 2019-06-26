window.addEventListener("load", function(){

  var urlSearchParams = new URLSearchParams(window.location.search)
  var idPelicula = urlSearchParams.get('idPelicula')
  console.log(idPelicula);

  var API_KEY = "928ad4dee3a02646fa1725b8bcaa2a96"
  var url = "https://api.themoviedb.org/3/movie/"+idPelicula+"?api_key="+API_KEY
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);

      var ul = document.querySelector('section ul')
      // PARTE FIJA DE LA URL DE LA IMAGEN
      var urlImg = "https://image.tmdb.org/t/p/original"
      var genero = ""
      var li = ""
      li = "<li>"
      li +=   "<p>"+objetoLiteralRespuesta.title+"</p>"


      li +=   "<img src='"+urlImg + objetoLiteralRespuesta.poster_path+"' style='width:25%;'>"
      li +=   "<p class='overview'>"+objetoLiteralRespuesta.overview+"</p>"
      li +=   "<p class='fechaDeLanzamiento'> Fecha de lanzamiento:  "+objetoLiteralRespuesta.release_date+"</p>"
      li +=   "<p class='punteo'> Rating:  "+objetoLiteralRespuesta.vote_average+"</p>"
      li +=   "<p class='duracion'> Duracion:  " + objetoLiteralRespuesta.runtime + " mins </p>"
      for (var i = 0; i < objetoLiteralRespuesta.genres.length; i++) {
        genero += objetoLiteralRespuesta.genres[i].name
      }
      li +=   "<p> Genero:  "+genero+"</p>"
      li +=   "<input type='button' value='Favoritos' class='boton-f' onclick='peliFavorita("+objetoLiteralRespuesta.id+")'>"



      li += "</li>"

      ul.innerHTML += li

      //TRAILER
      var url = "https://api.themoviedb.org/3/movie/"+idPelicula+"/videos?api_key="+API_KEY+"&language=en-US"
      fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(objetoLiteralRespuesta) {
          console.log(objetoLiteralRespuesta);
          var key = objetoLiteralRespuesta.results[0].key
          ul.innerHTML += "<div class='derecha'><iframe width='560' height='315' src='https://www.youtube.com/embed/"+key+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><div>"

        })
        .catch(function(error) {
          console.log("the error was: " + error);
        })

    })
    .catch(function(error) {
      console.log("the error was: " + error);
    })


})


function peliFavorita(id){
  console.log(id);
var favoritosArray = JSON.parse(window.sessionStorage.getItem("favoritosArray"))
if (favoritosArray != null && favoritosArray.lenght>0) {
  console.log("existe y no esta vacio");
if (favoritosArray.indexOf(id)>-1) {
   favoritosArray.splice(favoritosArray.indexOf(id),1)
   document.querySelector("input.boton-f").innerHTML = "Agregar a Favoritos"}
   else {
     favoritosArray.push(id)
     document.querySelector("input.boton-f").innerHTML = "Eliminar de Favoritos"
   }
   window.sessionStorage.setItem("favoritosArray", JSON.stringify(favoritosArray));
   console.log(favoritosArray);
 } else {
  favoritosArray = []
  favoritosArray.push(id)
  window.sessionStorage.setItem("favoritosArray",JSON.stringify(favoritosArray));
  console.log("esta vacio");
  console.log(favoritosArray);
 }
 }
