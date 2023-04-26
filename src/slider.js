import { stepsLogic } from "./steps";

export const forwardBtn = document.querySelector('.quiz-side__body__button-container__button-forward');
export const backBtn = document.querySelector('.quiz-side__body__button-container__button-back');
export const buttonsContainer = document.querySelector('.quiz-side__body__button-container');


export function slideBack() {
    backBtn.addEventListener('click', () => {
        if (currentBlock > 0) {
            blocks[currentBlock].classList.remove('quiz-side__body__form-blocks__block--active');
            currentBlock -= 1;
            blocks[currentBlock].classList.add('quiz-side__body__form-blocks__block--active');
        }
        if (currentBlock < 1) {
            backBtn.classList.remove('quiz-side__body__button-container__button-back--active');
        }

        stepsLogic(currentBlock, blocksLength)
    })
}
