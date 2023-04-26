const step = document.querySelectorAll('.quiz-side__body__form-blocks__block__step')

export function stepsLogic(currentBlock, blocksLength) {
    step.forEach(step => {
        step.textContent = `Шаг ${currentBlock + 1}/${blocksLength + 1}`
    })
}
