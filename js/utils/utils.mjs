export function listData(list, out) {
    //console.log ("List:", list);
    out.innerHTML = "";
    let newDivs = "";
    for (let card of list) {
        //console.log(card);
        newDivs += `
        <div class="card " style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${card.amiiboSeries}</h6>
                <img src="${card.image}" alt="${card.name}" class="card-img card-img-top ">
                <div class="card-text">
                    <p><strong>From:</strong> ${card.amiiboSeries}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <a href="./details.html?id=${card.head}${card.tail}" class="card-link text-decoration-none text-white border rounded-4 btn btn-primary">Read More</a>    
                    <a href="./details.html?id=${card.head}${card.tail}" class="card-link text-decoration-none text-white border rounded-4 btn btn-secondary">Card link</a>
                </div>
            </div>
        </div>`;
    }
    out.innerHTML = newDivs;
}
