var Slides = document.getElementsByClassName("slide");
var NoSlides = Slides.length;
var currentSlide = 0;

function IncreamentSlide() {
  currentSlide = currentSlide + 1;
  currentSlide = currentSlide % NoSlides;
}

function displayCurrent() {
  Slides[currentSlide].style.display = "block";
}

function hideall() {
  for (i = 0; i < NoSlides; i++) {
    Slides[i].style.display = "none";
  }
}
function main() {
  hideall();
  displayCurrent();
  IncreamentSlide();
}
main();
setInterval(main, 2000);
