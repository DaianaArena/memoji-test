function acierto(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
  });
  document.querySelector("#sonido-acierto").play();
}

function error(lasTarjetas) {

  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.add("error");
      document.querySelector("#sonido-error").play();
    });
  }, 500);


  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
