const carouselContainer = document.getElementsByClassName("hero--carousel__container")

carouselContainerWidth = carouselContainer[0].offsetWidth
carouselContainer[0].style.height = carouselContainerWidth + 'px'

window.addEventListener('resize', () => {
  carouselContainerWidth = carouselContainer[0].offsetWidth
  carouselContainer[0].style.height = carouselContainerWidth + 'px'
})

const listaModulo = document.getElementsByClassName("modulo-lista")
const botones = document.getElementsByClassName("modulo-botones")

function expandirModulo () {
  let indice = this.getAttribute("data-modulo")
  let estadoLista = listaModulo[indice].getAttribute("data-estado")
  if(estadoLista === 'false') {
    listaModulo[indice].style.display = "block"
    listaModulo[indice].setAttribute("data-estado",'true') 
  } else if(estadoLista === 'true') {
    listaModulo[indice].style.display = "none"
    listaModulo[indice].setAttribute("data-estado",'false') 
  }

}

for(let i = 0; i<botones.length; i++) {
  botones[i].addEventListener('click', expandirModulo)
  botones[i].setAttribute("data-modulo", i)
  listaModulo[i].setAttribute("data-lista", i)
}
