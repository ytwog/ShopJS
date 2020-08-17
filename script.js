function updateShop() {
    $.getJSON( "json/shopData.json", function( data ) {
      console.log(data);
    });
}
updateShop();