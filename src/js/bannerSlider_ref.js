
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


/*export default class bannerSlider {
    
    constructor(){
      this.select = document.querySelector('.js-bannerNav__step');
      let slideIndex = 1;
      console.log(slideIndex);
    }

    

    processClicked() {
      this.select.addEventListener("click", alert('asdasdasd'));
    }


init() {
      processClicked();
    }
  

}
*/


export default class bannerSlider {

 constructor() { //initial/first fire
   this.trigger = document.getElementById("c-IDsliderBanner");
   this.triggerTest = document.getElementById("c-IDsliderBanner1");
 }

 init() { //second fire

  if(!this.trigger) {
    return;
  }

     this.bindElement(); //load function
 }

 doSomething() { //function
   // console.log(this);
   console.log(this);
 }

 bindElement() { //bind function
  // console.log(this);
     this.trigger.addEventListener('click', this.doSomething.bind(this)); //binding function with an event

     this.triggerTest.addEventListener('click', function() { //scope method
         this.doSomething();

        alert('button 2');
     });
     // console.log(this);
   
 }
}