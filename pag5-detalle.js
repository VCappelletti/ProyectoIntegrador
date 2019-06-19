window.addEventListener("load", function() {

  idPelicula = new URLSearchParams(location.search).get("idPelicula")

  // INICIO BLOQUE 1 - Leer el array de storage

    // Paso 1 - Leo de localStorage
    var jsonFavoritas = localStorage.getItem("peliculasFavoritas")

    if (jsonFavoritas == null) {
      var favoritas = []
    } else {
      // Paso 2 - Desempaqueto el json
      var objLit = JSON.parse(jsonFavoritas)

      // Paso 3 - Leo del obj lit, la caracteristica importante
      var favoritas = objLit.caracteristica;
    }
  // CIERRA BLOQUE 1

  fetch("URLDETALLE" + idPelicula)
    .then(function(data) {
      return data.json()
    })
    .then(function(dataPeli) {
      // HACEN COSAS PARA MOSTRAR EL DETALLE

      // Inicio bloque 2 - Si la peli ya era favorita que aparezca ya pintada la estrella
      if (favoritas.indexOf(idPelicula) >= 0) {
        PONER LA ESTRELLA YA PINTADA
      }
      // Fin bloque 2

    })

    // Bloque 3 - Que pasa al clickear en la estrella
    document.querySelector("ESTRELLA").onclick = function() {
      // Bloque 3 a - Modifico el array
      if (favoritas.indexOf(idPelicula) >= 0) {
        // La quito
        var pos = favoritas.indexOf(idPelicula)
        favoritas.splice(pos,1)
        DESPINTAR LA ESTRELLA
      } else {
        // La agrego
        favoritas.push(idPelicula)
        PINTAR LA ESTRELLA
      }
      // Fin bloque 3 a

      // Bloque 3 b
        var objLit = {
          caracteristica: favoritas
        }

        var json = JSON.stringify(objLit)

        localStorage.setItem("peliculasFavoritas", json)
      // Fin bloque 3 b
    }
    // Fin bloque 3

})
