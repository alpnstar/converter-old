// let valutes = fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//     .then(request => request.json())
//     .then(data => console.log(data))

const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');

const input = document.querySelector('#input');
const select = document.querySelector('#select');
const result = document.querySelector("#result");

let allVals = {};
valutesRequest()
console.log(allVals)
async function valutesRequest() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    const valutes = result.Valute;

    elementUSD.textContent = (valutes.USD.Value).toFixed(2);
    elementEUR.textContent = (valutes.EUR.Value).toFixed(2);
    elementGBP.textContent = (valutes.GBP.Value).toFixed(2);
    allVals.USD = valutes.USD.Value;
    allVals.EUR = valutes.EUR.Value;
    allVals.GBP = valutes.GBP.Value;

    if (valutes.USD.Value < valutes.USD.Previous) {
        elementUSD.classList.toggle('top');
    } else elementUSD.classList.toggle('bottom');

    if (valutes.EUR.Value < valutes.EUR.Previous) {
        elementEUR.classList.toggle('top');
    } else elementEUR.classList.toggle('bottom');

    if (valutes.GBP.Value < valutes.GBP.Previous) {
        elementGBP.classList.toggle('top');
    } else elementGBP.classList.toggle('bottom');
}
function formula() {
    result.value = (input.value / allVals[select.value]).toFixed(2);

}

input.addEventListener('input', formula)
select.addEventListener('change', formula)


