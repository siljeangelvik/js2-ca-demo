import { listData } from "./utils.mjs";

let collection = [];
const outElement = document.getElementById("container");

async function collectCards() {

    // TODO: Add collection to sessionStorage and - only load new if empty

    try {
        const api = `https://www.amiiboapi.com/api/amiibo/`;
        //const api = `https://www.amiiboapi.com/api/amiibo/?character=Mario`;
        const response = await fetch(api);
        //console.log(response);
        const data = await response.json();
        //console.log("Data:", data);
        collection = data.amiibo;
        //console.log("Collection:", collection);
        listData (data.amiibo, outElement);
    } catch (error) {
        outElement.innerHTML = `Could not fetch data...`;
    }
}

collectCards();

const inputField = document.getElementById("queryString");
inputField.addEventListener("keyup", filterCards);

function filterCards () {
    const filterQuery = inputField.value;
    //console.log(filterQuery);
    console.log (collection.length);

    const filtered = collection.filter((card) => {
        //console.log(card.name, filterQuery);
        //console.log(card.name.toUpperCase().indexOf(filterQuery.toUpperCase()) > -1)
        return card.name.toUpperCase().indexOf(filterQuery.toUpperCase()) > -1;
    })

    listData (filtered, outElement);
}