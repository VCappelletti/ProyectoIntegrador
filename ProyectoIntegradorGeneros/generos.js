var queryString = new URLSearchParams(window.location.search);

    var genre = queryString.get("idDeGenero");
    var namegenre = queryString.get("genero");
    console.log(genre);
    console.log(namegenre);
      document.querySelector("div.menu h2").innerHTML += namegenre.toUpperCase() + ' Movies'
fetch("https://api.themoviedb.org/3/discover/movie?api_key=928ad4dee3a02646fa1725b8bcaa2a96&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genre)
.then(function(respuesta){
 return respuesta.json()
})
.then(function(informacion){
   console.log(informacion);

   var arrayDePelis = informacion.results
   for (var i = 0; i < arrayDePelis.length; i++) {
     var titulo =  arrayDePelis[i].title
     var url = arrayDePelis[i].poster_path
     var id = arrayDePelis[i].id
     var resumen = arrayDePelis[i].overview
     var fecha = arrayDePelis[i].release_date
     var puntos = arrayDePelis[i].vote_average

     document.querySelector("div.menu").innerHTML +='<div class="general"><a class="poster" posArray="' + i + '" idPelicula="' + id + '" href="detalles.html?idPelicula='+id+'" uk-toggle><img src="https://image.tmdb.org/t/p/original/'+ url +'" width="300px"></a></div>'
   }})
