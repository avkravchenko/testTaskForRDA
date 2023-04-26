import { forwardBtn } from ".";
import { stepsLogic } from "./steps";


const blocks = document.querySelectorAll('.quiz-side__body__form-blocks__block');
let currentBlock = 0;
const blocksLength = blocks.length - 1;
const backBtn = document.querySelector('.quiz-side__body__button-container__button-back');
const buttonsContainer = document.querySelector('.quiz-side__body__button-container');

function further() {
    if (currentBlock < blocks.length - 1) {
        blocks[currentBlock].classList.remove('quiz-side__body__form-blocks__block--active');
        currentBlock += 1;
        blocks[currentBlock].classList.add('quiz-side__body__form-blocks__block--active');
    }

    if (currentBlock >= 1) {
        backBtn.classList.add('quiz-side__body__button-container__button-back--active');
    } 

    if (blocksLength == currentBlock) {
        buttonsContainer.style.display = 'none';
    }

    forwardBtn.removeEventListener('click', further)
    forwardBtn.classList.remove('quiz-side__body__button-container__button-forward--active');

    stepsLogic(currentBlock, blocksLength)
}

export function movingSlideForwardOnRadio(htmlCollection) {
    htmlCollection.forEach(item => {
        item.addEventListener('click', () => {

            if (currentBlock < blocks.length - 1) {
                blocks[currentBlock].classList.remove('quiz-side__body__form-blocks__block--active');
                currentBlock += 1;
                blocks[currentBlock].classList.add('quiz-side__body__form-blocks__block--active');
            }
    
            if (currentBlock >= 1) {
                backBtn.classList.add('quiz-side__body__button-container__button-back--active');
            } 
    
            if (blocksLength == currentBlock) {
                buttonsContainer.style.display = 'none';
            }
    
            stepsLogic(currentBlock, blocksLength)
        })
    })
}

export function movingSlideForwardOnCheckbox(htmlCollection) {
    htmlCollection.forEach(item => {
        item.addEventListener('click', (e) => {
            const itemIsClicked = e.target;
            console.log(itemIsClicked)
            

            if (itemIsClicked) {
                forwardBtn.classList.add('quiz-side__body__button-container__button-forward--active');
                forwardBtn.addEventListener('click', further)
            }
        }) 
    })
}

export function movingSlideBack() {
    backBtn.addEventListener('click', () => {
        if (currentBlock > 0) {
            blocks[currentBlock].classList.remove('quiz-side__body__form-blocks__block--active');
            currentBlock -= 1;
            blocks[currentBlock].classList.add('quiz-side__body__form-blocks__block--active');
            forwardBtn.classList.add('quiz-side__body__button-container__button-forward--active');
            forwardBtn.addEventListener('click', further)
        }
        if (currentBlock < 1) {
            backBtn.classList.remove('quiz-side__body__button-container__button-back--active');
        }

        stepsLogic(currentBlock, blocksLength)
    })
}