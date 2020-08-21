const _DEBUGGING = false;
const _RACE = "Zerg";

function insertElementsFromJSON(node, placeholderID1, placeholderID2) {
    let itemCount = node.list.length;
    let buildingDiv = $('<div class="row mt-2">');
    let unitsDiv = $('<div class="row mt-2 p-sm-0">');
    $(placeholderID1).append(unitsDiv);
    $(placeholderID2).append(buildingDiv);
    node.list.forEach((element) => {
        let mainDiv = $('<div class="col-12 p-1 p-md-2 col-md-auto text-light bg-dark m-1 mr-0 "></div>');
        let elementImgWrapper = $('<div class="img-wrapper mb-md-2 m-0"></div>');
        let elementImg = $(`<img src="${element.thumbnail}" alt="${element.alt}" class="item-boxover">`)
        let elementName = $(`<div class="d-none d-lg-block d-md-block d-xl-block"><p>${element.name}</p></div>`);
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