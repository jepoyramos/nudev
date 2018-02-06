import 'jquery'; //import jquery package
import '../scss/main.scss'; //import main scss file
import bannerSlider from './bannerSlider'; //import class from js file

class App {

   constructor() {
       this.components = [];
   }

   component(component) {
       this.components.push(component);
   }

   boot() {
       this.bindComponents();
   }

   bindComponents() {
       this.components.forEach((component) => component.init());
   }
}

const app = new App();
app.component(new bannerSlider);
// app.component(new Buttons);
// app.component(new imageClicked);

document.addEventListener("DOMContentLoaded", (e) => app.boot());
