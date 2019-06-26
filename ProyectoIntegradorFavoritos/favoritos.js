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
}
