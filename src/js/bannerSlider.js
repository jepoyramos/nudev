
/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("blogSlides");
  var dots = document.getElementsByClassName("blogSlider__dots--dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}*/


export default class bannerSlider{
  
  constructor(){
    let slideIndex = 1;
    this.trigger = document.getElementById("js-prev");
    this.trigger = document.getElementById("js-next");
    console.log(slideIndex);
  }

  init(){
    this.bindMethod();
  }

  prev() {
   /* showSlides(slideIndex += n);*/
   console.log('previous')
  }

  next() {
   /* showSlides(slideIndex += n);*/
   console.log('next')
  }

  bindMethod(){
    this.trigger.addEventListener('click', this.prev.bind(this));
    this.trigger.addEventListener('click', this.next.bind(this));
  }


}