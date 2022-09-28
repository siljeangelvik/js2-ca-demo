import { listData } from "./utils.mjs"

const chosenOne = document.getElementById("selector");
chosenOne.addEventListener("change", collectCards);

async function collectCards() {
    const query = chosenOne.value;
    console.log(query);
    const outElement = document.getElementById("container");

    if (query !== "none") {
        outElement.innerHTML = "Loading...";
        try {
            const api = `https://www.amiiboapi.com/api/amiibo/?character=${query}`;
            const response = await fetch(api);
            const data = await response.json();
            console.log(data);
            listData (data.amiibo, outElement);
        } catch (error) {
            outElement.innerHTML = `Could not fetch ${query}, please try another`;
        }
    } else {
        outElement.innerHTML = "Please select a character";
    }
}