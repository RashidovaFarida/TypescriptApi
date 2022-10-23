var row = document.querySelector('.row');
var countStart = 0;
var countEnd = 4;
var fakeData = function () {
    fetch('https://fakestoreapi.com/products')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var div = "";
        for (var x = countStart; x < countEnd; x++) {
            div += "<div class=\"card ms-2 mt-2\" style=\"width: 18rem;\">\n            <img class=\"w-20\" src=\"".concat(data[x].image, "\" class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body d-flex justify-content-evenly flex-column \">\n              <h5 class=\"card-title\">").concat(data[x].title, "</h5>\n              <p>").concat(data[x].price, "$</p>\n              <a href=\"#\" class=\"btn \">Add cart</a>\n            </div>\n          </div>");
        }
        row.innerHTML = div;
    });
};
document.querySelectorAll("button")[4].onclick = function () {
    countStart = 0;
    countEnd = 4;
    fakeData();
};
document.querySelectorAll("button")[5].onclick = function () {
    countStart = 4;
    countEnd = 8;
    fakeData();
};
document.querySelectorAll("button")[6].onclick = function () {
    countStart = 8;
    countEnd = 12;
    fakeData();
};
document.querySelectorAll("button")[7].onclick = function () {
    countStart = 12;
    countEnd = 16;
    fakeData();
};
document.querySelectorAll("button")[8].onclick = function () {
    countStart = 34;
    countEnd = 45;
    fakeData();
};
fakeData();
