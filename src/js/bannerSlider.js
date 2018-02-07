
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
    this.activeSlide = document.getElementsByClassName('c-slide--active');
    this.activeSlide2 = document.querySelectorAll("div.c-slide--active");
    this.prev = document.getElementById('js-prev');
    this.next = document.getElementById('js-next');
    console.log(this.activeSlide);
    console.log(this.activeSlide2);
  }

  init(){
    this.bindMethod();
  }

  slidePrev() {
    this.activeSlide.classList.remove('c-slide--active');
    // console.log(this.activeSlide[0]);
    // this.activeSlide.previousSibling.classList.add('c-slide--active');
    // let count = this.activeSlide.length;
    // console.log('previous')
  }

  slideNext() {
    this.activeSlide.classList.remove('c-slide--active');
    this.activeSlide.nextSibling.classList.add('c-slide--active');
   console.log('next')
  }

  slideActive(){
    /*return slides.length;*/
    console.log(slides.length);
  }

  bindMethod(){// binds a method to an element and set it for an event
    this.prev.addEventListener('click', this.slidePrev.bind(this));
    this.next.addEventListener('click', this.slideNext.bind(this));
  }


}