
const url = 'https://nf-api.onrender.com/api/v1'; // API Link from Noroff API
const out = document.querySelector('.output');


const newURL = "https://valorant-api.com/v1/agents/search?data=**"+ input +"**&api_key=dc6zaTOxFJmzCs";

function listData(list) {
    list.forEach((item) => {
        // console.log(item.name);
        let newDiv = `<div>
            <h2>${item.name}</h2>
            <p><strong>Rating: </strong> ${item.rating}</p>
            <p><strong>Tags amount: </strong> ${item.tags.length}</p>
        </div>`;
        out.innerHTML += newDiv;
    })
}

fetch(url)
    .then(response => response.json())
    .then(dataArray => {
        // console.log(dataArray.results.length);
        listData(dataArray.results);
    })
    .catch((error) => out.innerHTML = "Something's wrong!" + error)
    .finally(() => document.querySelector(".loader").remove());


export { listData, url };


console.log('This is a module...');

