window.addEventListener("load",function() {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=928ad4dee3a02646fa1725b8bcaa2a96&")
  .then(function(respuesta){
   return respuesta.json()
  })
  .then(function(informacion){
     console.log(informacion);
     var div = '<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="min-height: 300; max-height: 600; animation: push">'
         div +=        '<ul class="uk-slideshow-items">'
     var li = ""
     var arrayDePelis = informacion.results
     for (var i = 0; i < arrayDePelis.length; i++) {
       var titulo =  arrayDePelis[i].title
       var url = arrayDePelis[i].poster_path
       var id = arrayDePelis[i].id
       var resumen = arrayDePelis[i].overview
       var fecha = arrayDePelis[i].release_date
       var puntos = arrayDePelis[i].vote_average
       // li = '<li>'
       li =     '<a href="detalles.html?idPelicula='+id+'">'
       li +=        '<img src="https://image.tmdb.org/t/p/original/'+ url +'" alt="" uk-cover>'
       li +=  '</a>'
       // li += '</li>'

       div += li
     }
     div +=    '</ul>'
     div +=    '<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>'
     div +=    '<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>'
     div +=  '</div>'
     document.querySelector("section.populares").innerHTML += div
   })
})
