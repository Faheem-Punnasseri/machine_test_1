var tableId = document.getElementById("productTable");
var productname = document.getElementById("productName");
var description = document.getElementById("description");
var localArr = [];

addProduct = () => {
    // alert("Hi");
    const obj = [
        { id: },
        { productname: productname.value },
        { description: description.value },
        { category: description.value },
    ]
    var newTr = document.createElement("tr");
    var idTd = document.createElement("td");
    var productnameTd = document.createElement("td");
    var descriptionTd = document.createElement("td");
    var categoryTd = document.createElement("td");
    var subCategoryTd = document.createElement("td");
    var weightTd = document.createElement("td");
    var qtyTd = document.createElement("td");
    newTr.append(idTd, productnameTd, descriptionTd, categoryTd, subCategoryTd, weightTd, qtyTd)
}

checkArr = () => {
    localArr[] != "";
}