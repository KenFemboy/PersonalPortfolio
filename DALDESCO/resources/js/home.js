function loopCarousel() {
  let loop = 0
  slideshow()
  function slideshow() {
    let highlightContent = ["Stylish", "Vivid", "Exceptional", "Remarkable", "Professional", "High-Quality"]
    let carouselHighlight = document.getElementById("carousel_highlight")
    let carouselButton = document.getElementById("carousel_button").style
    let content = document.body
    document.getElementById("carousel").appendChild(document.getElementsByClassName("carousel_slide")[0])
    carouselHighlight.style.opacity = "0%"
    if (loop == 5 && content.clientWidth < 544) {
      carouselButton.marginTop = "127px"
    }
    setTimeout(function() {
      carouselHighlight.innerHTML = highlightContent[loop]
      if (loop == 0) {
        carouselHighlight.classList.remove(`highlight_style_5`)
      }
      else {
        carouselHighlight.classList.remove(`highlight_style_${loop - 1}`)
      }
      carouselHighlight.classList.add(`highlight_style_${loop}`)
      if (loop != 5) {
        carouselButton.marginTop = "80px"
      }
      carouselHighlight.style.opacity = "100%"
      loop == 5 ? loop = 0 : loop++
    }, 250)
    setTimeout(slideshow, 10250)
  }
}
window.addEventListener("load", () => {
  setTimeout(function() {
    loopCarousel()
  }, 10250)
})