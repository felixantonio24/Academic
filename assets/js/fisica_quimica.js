
const flechafuncion= document.querySelector(".flechita")

flechafuncion.addEventListener("click" ,() =>
  {
    const flechitaa = document.querySelector(".section-cli")
    if (flechitaa) {
      flechitaa.scrollIntoView({ behavior: "smooth" });
    }
})