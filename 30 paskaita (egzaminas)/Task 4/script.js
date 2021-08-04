/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

function fetchData() {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => getCars(data))
        .catch(err => console.log(err))
}

function getCars(data) {
    const cars = data;
    cars.forEach(e => {
        createCarCard(e.brand, e.models)
    });

}

function createCarCard(brand, models) {
    const brandDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    brandDiv.setAttribute('id', 'brandId')
    h2.innerText = brand;
    document.getElementById('output').append(brandDiv);
    brandDiv.append(h2);
    models.forEach(j => {
        const modelDiv = document.createElement('p');
        modelDiv.setAttribute('id', 'modelId')
        modelDiv.innerText = j;
        brandDiv.append(modelDiv);
    })

};

fetchData();