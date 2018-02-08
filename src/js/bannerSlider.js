
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

/*function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}*/
  
  constructor(){
    let slideIndex = 1;
    /*slideActive(slideIndex);*/
    /*this.activeSlide = document.getElementsByClassName('c-slide--active');
    this.activeSlide2 = document.querySelectorAll("div.c-slide--active");*/
    this.prev = document.getElementById('js-prev');
    this.next = document.getElementById('js-next');
    /*console.log(this.activeSlide);
    console.log(this.activeSlide2);*/
  }

  init(){
    this.bindMethod();
  }

  

  slideNext() {
    /*this.activeSlide.classList.remove('c-slide--active');
    this.activeSlide.nextSibling.classList.add('c-slide--active');*/
    /*slideActive(slideIndex += n);*/
    console.log('next')
  }

  slideActive(n){
    console.log(n);
    console.log("active");
    let i;
    let slides = document.getElementsByClassName("c-slide");
    
    console.log(slides.length);
    /*console.log(actSlI);*/

    
    /*if (n > slides.length) { //return to start
      slideIndex = 1
    }
    if (n < 1) { //
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";*/
  }

  slidePrev(n) {
    /*this.activeSlide.classList.remove('c-slide--active');*/
    // console.log(this.activeSlide[0]);
    // this.activeSlide.previousSibling.classList.add('c-slide--active');
    // let count = this.activeSlide.length;
    this.slideActive(-1);
    let actSlI = document.querySelector("div.c-slide--active");
    actSlI.nextSibling.classList.add('c-slide--active');
     actSlI.classList.remove('c-slide--active');
    /*console.log(activeSlide);*/
  }

  bindMethod(){// binds a method to an element and set it for an event
    this.prev.addEventListener('click', this.slidePrev.bind(this));
    /*this.next.addEventListener('click', this.slideNext.bind(this));*/
  }


}