import { dropDown, innerCityContent, innerSpecialityContent } from "./dropDown";
import { slideBack, slideForward } from "./slider";

const firstFormInputs = document.querySelectorAll('input[type="radio"]')
const firstFormContainers = document.querySelectorAll('.quiz-side__body__form-blocks__block__answers__answer');
const forwardBtn = document.querySelector('.quiz-side__body__button-container__button-forward');
const city = document.querySelector('.city');
const cities = document.querySelectorAll('[name="city"]');
const specialities = document.querySelectorAll('[name="speciality"]');
const speciality = document.querySelector('.speciality')

firstFormInputs.forEach((elem, index) => {
   elem.addEventListener("change", function() {
       firstFormContainers.forEach((container) => {
          container.classList.remove('quiz-side__body__form-blocks__block__answers__answer--checked');
       });
       
       if (elem.checked) {
          firstFormContainers[index].classList.add('quiz-side__body__form-blocks__block__answers__answer--checked');
          forwardBtn.classList.add('quiz-side__body__button-container__button-forward--active');
          forwardBtn.click();
         }
      })
   })

dropDown();
innerCityContent(cities, city);
slideForward();
slideBack();
innerCityContent(specialities, speciality);
