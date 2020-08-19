const _DEBUGGING = false;
const _RACE = "Zerg";

function getElements(node) {
    let itemCount = node.list.length;
    let mainDiv = $('<div class="col-4 text-light bg-dark m-1 col-md-2"></div>');
    node.list.forEach((element) => {
        let elementImg = $(`<img src="${element.thumbnail}" alt="${element.alt}" class="item-boxover">`)
        let elementName = $(`<div>${element.name}</div>`);
        mainDiv.append(elementImg);
        mainDiv.append(elementName);
    });
    return mainDiv;
}

function updateShop() {
    $.getJSON( "json/shopData.json", function( data ) {
        if(_DEBUGGING) {
          console.log(data);
        }
        let menuBuy = $('#menu-buy');
        data.list.forEach((element)=>{
            if(_RACE == element["race"])
                menuBuy.append(getElements(element));
        })
    });
}
updateShop();