import { dropDown, innerCityContent } from "./dropDown";
import { movingSlideBack, movingSlideForwardOnCheckbox, movingSlideForwardOnRadio } from "./movingSlide";
import { radioButtonsStyling } from "./radioButtonsStyling";


export const forwardBtn = document.querySelector('.quiz-side__body__button-container__button-forward');
const city = document.querySelector('.city');
const cities = document.querySelectorAll('[name="city"]');
const specialities = document.querySelectorAll('[name="speciality"]');
const speciality = document.querySelector('.speciality');
export const radioInputs = document.querySelectorAll('input[type="radio"]');
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');

radioButtonsStyling();
dropDown();
innerCityContent(cities, city);
movingSlideForwardOnRadio(radioInputs);
movingSlideForwardOnCheckbox(checkboxInputs);
movingSlideBack();
innerCityContent(specialities, speciality);

