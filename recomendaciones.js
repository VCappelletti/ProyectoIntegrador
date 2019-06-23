window.onload = function() {
API_KEY = "928ad4dee3a02646fa1725b8bcaa2a96"
var url = " https://api.themoviedb.org/3/movie/popular?api_key="+API_KEY+"&page=1"
fetch(url)
.then(function(response){
  return response.json();
})
.then(function(objetoLiteralRespuesta) {
console.log(objetoLiteralRespuesta);
var arrayPeliculas = objetoLiteralRespuesta.results

var ul =

for (var i = 0; i < arrayPeliculas.length; i++) {
  arrayPeliculas[i]
   li = "<li>"
   li +=    "<div class='uk-panel'>"
   li +=        "<img src=''>"
   li +=         "<p>"+   title +"</p>"
   li +=    "</div>"
   li +="</li>"
}

})
.catch(function(error) {
  console.log("the error was: " + error);
})

function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = txt;
}

}
// CUANDO INGRESO; DEBO INICIALIZAR EL ARRAY DONDE VOY A GUARDAR LAS PELIS FAVORITAS
var arrayDePelisFavoritas = [] // ESTO IRIA LUEGO DE HACER LOG IN

function agregarFavoritos(id) {
 alert("me clickearon!!!")
 // PRIMERO, reviso si hay alguna peli FAVORITA (en el array)
 if (arrayDePelisFavoritas.indexOf(id)===-1) {
     // EN ESTE CASO NO ES FAVORITA
     // pusheo el id dentro del array
     arrayDePelisFavoritas.push(id)
     // guardo en session el array, como es un objeto debo transformarlo a STRING
     window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
 } else {
   // ESTA PELI YA ES FAVORITA
   console.log(arrayDePelisFavoritas.indexOf(id));
   // la saco del array
   arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(id),1)
   console.log(arrayDePelisFavoritas);
   // reemplazo el array que tenia la peli como favorita, por el array que ya no la tiene
   window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
 }

 console.log(id);
 console.log(JSON.parse(window.sessionStorage.getItem("favorita")));
}


fetch("https://api.themoviedb.org/3/movie/"+id+"/recommendations?api_key=928ad4dee3a02646fa1725b8bcaa2a96&language=en-US&page=1")
        .then(function(respuesta){
          return respuesta.json()
        })
        .then(function(peliculas){
          console.log(peliculas.results);
          var arrayDePelis = peliculas.results
          for(var i=0; i< arrayDePelis.length; i++){
            var url= arrayDePelis[i].poster_path
            console.log(url);
            var titulo =  arrayDePelis[i].title
            var id = arrayDePelis[i].id
            var resumen = arrayDePelis[i].overview
            var fecha = arrayDePelis[i].release_date
            var puntos = arrayDePelis[i].vote_average
            if (i == 0) {
              document.querySelector("#carrousel-recomendadas").innerHTML = '<li><div class="las-recomendadas"><a id="detalle" class= "posterC" posArray="' + i + '" idPelicula="' + id + '"href="#modal-example" uk-toggle><img src="https://image.tmdb.org/t/p/original'+ url+'"></a></div></li>'
             }else {
               document.querySelector("#carrousel-recomendadas").innerHTML += '<li><div class="las-recomendadas"><a id="detalle" class= "posterC" posArray="' + i + '" idPelicula="' + id + '"href="#modal-example" uk-toggle><img src="https://image.tmdb.org/t/p/original'+url+'"></a></div></li>'
             }
          }

        })
        .catch(function(error){
          console.log(error);
          return console.log("Error" + error);
        })
