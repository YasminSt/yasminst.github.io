let slideIndex = {};

window.onload = () => {
    let containers = document.getElementsByClassName("slideshow-container");
    for (let i = 0; i < containers.length; ++i) {
        const name = containers[i].getAttribute('data-name');
        if (name) plusSlides(0, name);
    }
}

// Next/previous controls
function plusSlides(n, className) {
    let curentSlideshowIndex = slideIndex[className] || 1;
    showSlides(curentSlideshowIndex += n, className);
}

// Thumbnail image controls
function currentSlide(n, className) {
    let curentSlideshowIndex = slideIndex[className] || 1;
    showSlides(curentSlideshowIndex = n, className);
}

function showSlides(n, className) {
  let i;
  let slides = document.getElementsByClassName(className);
  let dots = document.getElementsByClassName(className + "-dot");
  let curentSlideshowIndex = n;
  if (n > slides.length) {curentSlideshowIndex = 1}
  if (n < 1) {curentSlideshowIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[curentSlideshowIndex-1].style.display = "block";
  dots[curentSlideshowIndex-1].className += " active";
  slideIndex[className] = curentSlideshowIndex;  
}
