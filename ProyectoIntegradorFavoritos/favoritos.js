window.addEventListener("load", function(){
API_KEY = "928ad4dee3a02646fa1725b8bcaa2a96"

//guardo lo que haya en favoritos
var favoritosArray = JSON.parse(sessionStorage.getItem("peliFavorita"))
var url = ""

//checkeo si favoritos es algo, si es algo, tiene ids
if (favoritosArray != null) {
  console.log(favoritosArray);
  for (var i = 0; i < favoritosArray.length; i++) {
    console.log(favoritosArray[i]);
    url = "https://api.themoviedb.org/3/movie/"+favoritosArray[i]+"?api_key="+API_KEY
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);


      var ul = document.querySelector('section ul')
            var urlImg = "https://image.tmdb.org/t/p/original"
        //insertar en html
      var li = ""
      li += "<li>"
      li +=   "<p>"+objetoLiteralRespuesta.title+"</p>"
      li +=   "<img src='"+urlImg + objetoLiteralRespuesta.poster_path+"' style='width:25%;'>"




      li += "</li>"

      ul.innerHTML += li

    })
    .catch(function(error) {
      console.log("the error was: " + error);
    })
  }
}


})
