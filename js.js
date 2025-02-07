// Scroll to Courses Section
function scrollToCourses() {
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  let textoOriginal = " a la universidad";
  let textoCambio = "al éxito";
  
  let parteCambio = document.querySelector('.cambio');
  let i = 0;
  let intervalo;
  
  function escribirTexto(texto) {
    let textoNuevo = texto; // El texto que queremos escribir
    i = 0;
    parteCambio.textContent = ''; // Limpiamos el contenido previo
    intervalo = setInterval(() => {
      parteCambio.textContent += textoNuevo[i];
      i++;
      if (i === textoNuevo.length) {
        clearInterval(intervalo);
        setTimeout(() => {
          borrarTexto(textoNuevo);
        }, 1000); // Pausa antes de borrar
      }
    }, 100); // Velocidad de escritura
  }
  
  function borrarTexto(texto) {
    i = texto.length;
    intervalo = setInterval(() => {
      parteCambio.textContent = texto.substring(0, i);
      i--;
      if (i < 0) {
        clearInterval(intervalo);
        setTimeout(() => {
          // Si el texto actual es el texto cambiado, volvemos al texto original
          if (texto === textoCambio) {
            escribirTexto(textoOriginal); // Regresa al texto original
          } else {
            escribirTexto(textoCambio); // Cambia a "al éxito"
          }
        }, 500); // Tiempo de espera antes de cambiar el texto
      }
    }, 100); // Velocidad de borrado
  }
  
  // Inicia la animación con la frase original
  escribirTexto(textoOriginal);
  