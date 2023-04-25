const select = document.querySelectorAll('.select');
const optionsBlock = document.querySelectorAll('.options');

export function dropDown() {
    select.forEach(item => {
        item.addEventListener('click', () => {
            optionsBlock.forEach(optionsBlock => {
                optionsBlock.style.visibility = "visible";
            })
        })
    })
}

export function innerCityContent(htmlCollection, output) {
    let currentChecked = htmlCollection[0];

    htmlCollection.forEach((elem) => {
        
        elem.addEventListener('change', () => {
            if (elem.checked) {
                if (elem !== currentChecked) {
                    currentChecked.checked = false;
                    currentChecked = elem;
                }
                output.textContent = `${elem.value}`;
            } else {
                currentChecked = htmlCollection[0];
                output.textContent = `${htmlCollection[0].value}`;
            }
        });
    });
}
