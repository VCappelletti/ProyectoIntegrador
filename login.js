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
  // li = "<li>"
  // li +=    "<div class='uk-panel'>"
  // li +=        "<img src=''>"
  // li +=         "<p>"+   title +"</p>"
  // li +=    "</div>"
  // li +="</li>"
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
