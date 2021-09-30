function saveData(dataArr) {
    localStorage.setItem('data',JSON.stringify(dataArr));
}

function loadData() {
    if(localStorage.hasOwnProperty('data')){
        let data = localStorage.getItem('data');
        let dataJson = JSON.parse(data);
        return convertData(dataJson);
    }else {
        return [];
    }
}

function convertData(dataArr) {
    let arrObj = [];
    for (let i = 0; i < dataArr.length; i++) {
        let product = new Product(dataArr[i].name,dataArr[i].price);
        product.image = dataArr[i].image;
        product.description = dataArr[i].description;

        arrObj.push(product);
    }
    return arrObj;
}
