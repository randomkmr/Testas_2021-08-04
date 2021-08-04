/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function calculator(a, b) {
    this.sum = a + b;
    this.subtractiont = a - b;
    this.multiplication = a * b;
    this.division = a / b;
}

//patikrinimas
console.log(new calculator(10, 5));
const calc = new calculator(5, 5);
console.log(calc.division)