const select = document.querySelector('.select');
const optionsBlock = document.querySelector('.options');
const city = document.querySelector('.city');
const cities = document.querySelectorAll('[name="city"]');

export function dropDown() {
    select.addEventListener('click', () => {
        optionsBlock.style.visibility = "visible";
    })
}

export function innerCityContent() {
    let currentChecked = cities[0];

    cities.forEach((elem) => {
        elem.addEventListener('change', (e) => {
            if (elem.checked) {
                if (elem !== currentChecked) {
                    currentChecked.checked = false;
                    currentChecked = elem;
                }
                city.textContent = `${elem.value}`;
            } else {
                currentChecked = cities[0];
                city.textContent = `${cities[0].value}`;
            }
        });
    });
}
