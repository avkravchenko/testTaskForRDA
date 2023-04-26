import { dropDown, innerCityContent } from "./dropDown";
import { movingSlideBack, movingSlideForwardOnCheckbox } from "./movingSlideForwardOnInput";
import { movingSlideForwardOnRadio } from "./movingSlideForwardOnInput";




const blockAnswers = document.querySelectorAll('.quiz-side__body__form-blocks__block__answers__answer');
export const forwardBtn = document.querySelector('.quiz-side__body__button-container__button-forward');
const city = document.querySelector('.city');
const cities = document.querySelectorAll('[name="city"]');
const specialities = document.querySelectorAll('[name="speciality"]');
const speciality = document.querySelector('.speciality');
const radioInputs = document.querySelectorAll('input[type="radio"]');
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');



dropDown();
innerCityContent(cities, city);
movingSlideForwardOnRadio(radioInputs);
movingSlideForwardOnCheckbox(checkboxInputs);
movingSlideBack();
innerCityContent(specialities, speciality);

