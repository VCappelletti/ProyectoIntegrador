window.addEventListener("load",function(){
fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=928ad4dee3a02646fa1725b8bcaa2a96&language=en-US")
.then(function(respuesta){
 return respuesta.json()
})
.then(function(informacion){
   console.log(informacion);
   var arrayDeGeneros = informacion.genres
   var div = ""
   for (var i = 0; i < arrayDeGeneros.length; i++) {
     div = "<div>"
     div +=   "<h3><a style='text-decoration: none; color: yellow;' href='../ProyectoIntegradorGeneros/generos.html?idDeGenero="+ arrayDeGeneros[i].id +"&genero="+ arrayDeGeneros[i].name +"'>"
     div +=        arrayDeGeneros[i].name
     div +=   "</a></h3>"
     div += "</div>"
     document.querySelector("div.menu").innerHTML += div
      // '<a id="ultimo" class="dropdown-item" href="listado.html?genero='+generos[i].id+'&nombre=' + generos[i].name + '">' + generos[i].name + '</a>'
   }


})

.catch(function(error){
 console.log("Error:" + error)
})
})
