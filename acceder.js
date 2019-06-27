window.addEventListener('load', function() {
  var objetoPersona = JSON.parse(window.sessionStorage.getItem('user'))
  if (objetoPersona != null && objetoPersona.nombre.length>0) {
    // alert("Hola "+ objetoPersona.nombre)
    document.querySelector("div.login a").innerHTML = objetoPersona.nombre
  } else {

  }

  document.querySelector("section.todoelbody form").addEventListener('submit', function(event){
    console.log(document.querySelector("section.todoelbody form"));
    //FALTA VALIDAR LOS DATOS INGRESADOS EN CADA CAMPO
    //event.preventDefault()
    var usuario = document.querySelector("input[name=username]").value
    var email = document.querySelector("input[name=email]").value
    var genero = document.querySelector("input[name=genero]").value
    var persona = {
      nombre:usuario,
      mail: email,
      genre: genero
    }
    window.sessionStorage.setItem('user' , JSON.stringify(persona));
    JSON.parse(window.sessionStorage.getItem('user'));
  })


})
//CUANDO INGRESO; DEBO INICIALIZAR EL ARRAY DONDE VOY A GUARDAR LAS PELIS FAVORITAS
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
