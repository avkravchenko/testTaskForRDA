const forwardBtn = document.querySelector('.quiz-side__body__button-container__button-forward');
const backBtn = document.querySelector('.quiz-side__body__button-container__button-back');

const blocks = document.querySelectorAll('.quiz-side__body__form-blocks__block');


let currentBlock = 0;

export function slideForward() {
    forwardBtn.addEventListener('click', () => {
        if (currentBlock < blocks.length - 1) {
            blocks[currentBlock].classList.remove('quiz-side__body__form-blocks__block--active');
            currentBlock += 1;
            blocks[currentBlock].classList.add('quiz-side__body__form-blocks__block--active');

            console.log(currentBlock)
        }

        if (currentBlock >= 1) {
            backBtn.classList.add('quiz-side__body__button-container__button-back--active');
        } 
    })
}

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
    })
}
