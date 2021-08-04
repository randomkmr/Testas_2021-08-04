/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

function fetchData() {
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => getUsers(data));
}

function getUsers(data) {
  const users = data;
  users.forEach(e => {
    const userImg = document.createElement('img'); //idejau paveiksliuka vieotj avataro url
    const p = document.createElement('p');
    const hr = document.createElement('hr');
    userImg.src = e.avatar_url;
    userImg.setAttribute('class', 'userImg');
    userImg.alt = e.login;
    p.innerText = e.login;
    p.setAttribute('id', 'userLogin');
    document.getElementById('output').append(userImg, p, hr);

  });
  document.getElementById('message').innerText = `Total number of users: ${users.length}`;
}