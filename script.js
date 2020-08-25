const _DEBUGGING = false;
const _RACE = "Zerg";

function insertElementsFromJSON(node, placeholderID1, placeholderID2) {
    let itemCount = node.list.length;
    let buildingDiv = $('<div class="row">');
    let unitsDiv = $('<div class="row">');
    $(placeholderID1).append(unitsDiv);
    $(placeholderID2).append(buildingDiv);
    node.list.forEach((element, index) => {
        //let sizeLg = index % 
        let mainWrapper = $('<div class="col-12 p-1 p-md-2 col-md-6 col-xl-4 text-light bg-secondary transition-width"></div>');
        let mainDiv = $('<div class="bg-dark h-100"></div>');
        let elementImgWrapper = $('<div class="img-wrapper mb-md-2"></div>');
        let elementImg = $(`<img src="${element.thumbnail}" alt="${element.alt}" class="item-boxover">`)
        let elementName = $(`<div class="d-none d-lg-block py-1 bg-black d-xl-block"><p class=" p-0 m-0">${element.name}</p></div>`);
        let elementCost = $(`<div class="d-none d-sm-block py-1 bg-black d-md-block d-lg-block d-xl-block">
                                    <div class="img-wrapper-sm mb-md-2 m-0 text-white">
                                        <img src="images/gGlass.png" alt="Minerals" class="item-boxover"> 
                                        <div class="item-info">
                                                 X${element.costX}
                                        </div>
                                    </div>
                            </div>`);
        elementImgWrapper.append(elementImg);
        mainWrapper.append(mainDiv);
        mainDiv.append(elementImgWrapper);
        mainDiv.append(elementName);
        mainDiv.append(elementCost);
        if(element.isBuilding) {
            buildingDiv.append(mainWrapper);
        } else {
            unitsDiv.append(mainWrapper);
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