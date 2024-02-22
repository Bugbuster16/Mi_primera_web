
var globo = document.getElementById('descripcionGlobo');
var globo2 = document.getElementById('descripcionGlobo2');
var globo3 = document.getElementById('descripcionGlobo3');
var globo4 = document.getElementById('descripcionGlobo4');
var Cerrar = document.querySelectorAll(".botonCerrar");

function mostrarGlobo() {

   globo.style.display = 'flex';
   globo.style.flexDirection = "column";
   globo.style.alignItems = "center";
}
function mostrarGlobo2() {

   globo2.style.display = 'flex';
   globo2.style.flexDirection = "column";
}
function mostrarGlobo3() {

   globo3.style.display = 'flex';
   globo3.style.flexDirection = "column";
}
function mostrarGlobo4() {

   globo4.style.display = 'flex';
   globo4.style.flexDirection = "column";
}

for (var i = 0; i < Cerrar.length; i++) {
   Cerrar[i].addEventListener("click", () => {
      globo.style.display = "none";
      globo2.style.display = "none";
      globo3.style.display = "none";
      globo4.style.display = "none";
   })
}








//alert("Hola este es mi Javascript");


/*
   setTimeout(function() {
   globo.style.display =  'none';
   */
// Ocultar el globo después de un cierto tiempo (por ejemplo, 3 segundos)



/*
window.addEventListener('scroll', function() {
   var section = document.getElementById('section-0');
   var scrollPosition = window.scrollY;
 
   // Cambia la opacidad del fondo basado en la posición de desplazamiento
   if (scrollPosition === 0) {
       section.style.backgroundColor = 'rgba(34, 34, 34, 0.5)';
   } else {
       section.style.backgroundColor = 'rgba(34, 34, 34, 1)';
   }
});
*/