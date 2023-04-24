const firstFormInputs = document.querySelectorAll('input[type="radio"]')
const firstFormContainers = document.querySelectorAll('.quiz-side__body__form-blocks__block__answers__answer');
const forwardBtn = document.querySelector('.quiz-side__body__button-container__button-forward');

firstFormInputs.forEach((elem, index) => {
    elem.addEventListener("change", function() {
       firstFormContainers.forEach((container) => {
          container.classList.remove('quiz-side__body__form-blocks__block__answers__answer--checked');
       });
       
       if (elem.checked) {
          firstFormContainers[index].classList.add('quiz-side__body__form-blocks__block__answers__answer--checked');
          forwardBtn.classList.add('quiz-side__body__button-container__button-forward--active')
       }
    })
 })