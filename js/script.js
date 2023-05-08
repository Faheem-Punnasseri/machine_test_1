var tableId = document.getElementById("productTable");
var productname = document.getElementById("productName");
var description = document.getElementById("description");
var category = document.getElementById("category");
var subCategory = document.getElementById("subCategory");
var weight = document.getElementById("weight");
var unit = document.getElementById("unit");
var quantity = document.getElementById("quantity");
var amount = document.getElementById("amount");
var productNameSpan = document.getElementById("productNameSpan");
var inputAndSelectTags = document.querySelectorAll("input, select, textarea");
var flAg;
var localArr;

addProduct = () => {
    checkInput();
    if (!flAg) {
        let productObj = {
            // id: ,
            productname: productname.value,
            description: description.value,
            category: category.value,
            subCategory: subCategory.value,
            weight: weight.value + unit.value,
            // unit: unit.value,
            quantity: quantity.value,
            amount: amount.value,
        }
        var newTr = document.createElement("tr");
        tableId.append(newTr);
        var idTd = document.createElement("td");
        var productnameTd = document.createElement("td");
        var descriptionTd = document.createElement("td");
        var categoryTd = document.createElement("td");
        var subCategoryTd = document.createElement("td");
        var weightTd = document.createElement("td");
        var qtyTd = document.createElement("td");
        productnameTd.innerHTML = productname.value;
        descriptionTd.innerHTML = description.value;
        categoryTd.innerHTML = category.value;
        subCategoryTd.innerHTML = subCategory.value;
        weightTd.innerHTML = weight.value + unit.value;
        qtyTd.innerHTML = quantity.value;
        newTr.append(idTd, productnameTd, descriptionTd, categoryTd, subCategoryTd, weightTd, qtyTd);
        localArr.push(productObj);
        localStorage.setItem("product", JSON.stringify(localArr));
        slNumber();
        inputClear();
    }
}

checkArr = () => {
    localArr = JSON.parse(localStorage.getItem("product")) == null ? [] : JSON.parse(localStorage.getItem("product"));
    if (localArr != "") {
        displayProductTable();
    }
}

slNumber = () => {
    for (let i = 1; i <= localArr.length; i++) {
        tableId.rows[i].cells[0].innerHTML = i;
    }
}

inputClear = () => {
    productname.value = "";
    description.value = "";
    category.value = "";
    subCategory.value = "";
    weight.value = "";
    unit.value = "";
    quantity.value = "";
    amount.value = "";
}

checkInput = () => {
    for (var i = 0; i < inputAndSelectTags.length; i++) {
        var newSpan = document.createElement('span');
        if (inputAndSelectTags[i].value == "") {
            // console.log(inputAndSelectTags[i].parentNode);
            var parentElement = inputAndSelectTags[i].parentNode;
            var parentSpanElement = parentElement.querySelector("span");
            // console.log("parentSpanElement => " + parentSpanElement);
            parentSpanElement.classList.remove("d-none");
            parentSpanElement.classList.add("d-block");
            flAg = true;
        } else {
            var parentElement = inputAndSelectTags[i].parentNode;
            var parentSpanElement = parentElement.querySelector("span");
            parentSpanElement.classList.remove("d-block");
            parentSpanElement.classList.add("d-none");
            flAg = false;
        }
    }
}

displayProductTable = () => {
    // console.log("localArr => " + localArr);
    for (let i = 0; i < localArr.length; i++) {
        var newTr = document.createElement("tr");
        newTr.setAttribute("id", "row");
        tableId.append(newTr);
        var trId = document.getElementById("row");
        var idTd = document.createElement("td");
        var productnameTd = document.createElement("td");
        var descriptionTd = document.createElement("td");
        var categoryTd = document.createElement("td");
        var subCategoryTd = document.createElement("td");
        var weightTd = document.createElement("td");
        var qtyTd = document.createElement("td");
        productnameTd.innerHTML = localArr[i]["productname"];
        descriptionTd.innerHTML = localArr[i]["description"];
        categoryTd.innerHTML = localArr[i]["category"];
        subCategoryTd.innerHTML = localArr[i]["subCategory"];
        weightTd.innerHTML = localArr[i]["weight"];
        qtyTd.innerHTML = localArr[i]["quantity"];
        newTr.append(idTd, productnameTd, descriptionTd, categoryTd, subCategoryTd, weightTd, qtyTd)
    }
    slNumber();
}

checkArr();