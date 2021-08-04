/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function convertKg(e) {
    e.preventDefault();
    const valueKg = Number(document.getElementById('search').value);
    const lbs = (valueKg * 2.2046).toFixed(2);
    const grams = (valueKg / 0.0010000).toFixed(0);
    const ozai = (valueKg * 35.274).toFixed(2);

    return (isNaN(valueKg) || valueKg <= 0 ? klaida() : printResult(lbs, grams, ozai));
}

function printResult(lb, gr, oz) {
    output.innerHTML = `Your weight in lb: ${lb} lb\r\n`;
    output.textContent += `Your weight in g: ${gr} grams \r\n`;
    output.textContent += `Your weight in oz: ${oz} oz\r\n`;
}

function klaida() {
    alert('Only numbers and bigger than zero!!!!');
    output.textContent = `Only numbers and bigger than zero!!!!`;
}

const forma = document.getElementById('submit-form');
const output = document.getElementById('output');

forma.addEventListener('submit', convertKg);