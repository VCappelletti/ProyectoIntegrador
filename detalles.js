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
      li +=   "<p style='font-size: 1em'class='overview'>"+objetoLiteralRespuesta.overview+"</p>"
      li +=   "<p style='font-size: 1em'class='fechaDeLanzamiento'> Fecha de lanzamiento:  "+objetoLiteralRespuesta.release_date+"</p>"
      li +=   "<p style='font-size: 1em'class='punteo'> Rating:  "+objetoLiteralRespuesta.vote_average+"</p>"
      li +=   "<p style='font-size: 1em'class='duracion'> Duracion:  " + objetoLiteralRespuesta.runtime + " mins </p>"
      for (var i = 0; i < objetoLiteralRespuesta.genres.length; i++) {
        genero += objetoLiteralRespuesta.genres[i].name
      }
      li +=   "<p style='font-size: 1em'> Genero:  "+genero+"</p>"
      li +=   "<button type='button' value='Favoritos' class='boton-f' onclick='peliFavorita("+objetoLiteralRespuesta.id+")'>Agregar a Favoritos</button>"



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
    var favoritosArray = JSON.parse(sessionStorage.getItem("peliFavorita"))
    console.log(favoritosArray);
    if (favoritosArray == null) {
      favoritosArray = []
      console.log("es nulo, creo el array");
    }

    if (favoritosArray.indexOf(id)<0) {
      console.log("no esta en el array");
      console.log(favoritosArray);
      favoritosArray.push(id)
      window.sessionStorage.setItem("peliFavorita",JSON.stringify(favoritosArray));

      console.log(sessionStorage);
      document.querySelector("li button").innerHTML = "Quitar a favoritos"
    }else{
      console.log("esta en el array");
      favoritosArray.splice(favoritosArray.indexOf(id), 1)
      console.log(favoritosArray);
      window.sessionStorage.setItem("peliFavorita",JSON.stringify(favoritosArray));
      document.querySelector("li button").innerHTML = "Agregar a favoritos"
    }

}
