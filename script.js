const _DEBUGGING = false;
const _RACE = "Zerg";

function insertElementsFromJSON(node, placeholderID1, placeholderID2) {
    let itemCount = node.list.length;
    let buildingDiv = $('<div class="row">');
    let unitsDiv = $('<div class="row">');
    $(placeholderID1).append(unitsDiv);
    $(placeholderID2).append(buildingDiv);
    node.list.forEach((element) => {
        let mainDiv = $('<div class="col-12 col-md-4 col-lg-3 text-light bg-dark m-1"></div>');
        let elementImgWrapper = $('<div class="img-wrapper d-none d-lg-block d-md-block d-xl-block"></div>');
        let elementImg = $(`<img src="${element.thumbnail}" alt="${element.alt}" class="item-boxover m-75">`)
        let elementName = $(`<div><p>${element.name}</p></div>`);
        elementImgWrapper.append(elementImg);
        mainDiv.append(elementImgWrapper);
        mainDiv.append(elementName);
        console.log(element.isBuilding);
        if(element.isBuilding) {
            buildingDiv.append(mainDiv);
        } else {
            unitsDiv.append(mainDiv);
        }
    });
}

function updateShop() {
    $.getJSON( "json/shopData.json", function( data ) {
        if(_DEBUGGING) {
          console.log(data);
        }
        data.list.forEach((element)=>{
            if(_RACE == element["race"])
                insertElementsFromJSON(element, '#menu-buy-units', '#menu-buy-buildings');
        })
    });
}
updateShop();