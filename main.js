const modulos = document.getElementsByClassName("programas--card__modulo")
const carouselContainer = document.getElementsByClassName("hero--carousel__container")

const expandirModulo = function() {
  let estado = this.getAttribute("data-atributo")
  if(estado === 'false'){
    this.classList.add("expandir-modulo")
    this.setAttribute("data-atributo", 'true')
  } else if(estado){
    this.classList.remove("expandir-modulo")
    this.setAttribute("data-atributo", 'false')
  }
};

for(let i = 0; i < modulos.length; i++){
  modulos[i].addEventListener('click', expandirModulo)
}

carouselContainerWidth = carouselContainer[0].offsetWidth
carouselContainer[0].style.height = carouselContainerWidth + 'px'

window.addEventListener('resize', () => {
  carouselContainerWidth = carouselContainer[0].offsetWidth
  carouselContainer[0].style.height = carouselContainerWidth + 'px'
  console.log(typeof carouselContainerWidth)
})


