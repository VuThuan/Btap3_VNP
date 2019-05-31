//Counter
var count = 0;
var count1 = 0;
//function=====================
function moveRight(firstElement, Width, elementLength, slg) {
    firstElement.style.transition = "transform 0.6s ease-in-out";
    count++;
    if (count > elementLength - slg) {
        count = 0;
    }
    firstElement.style.transform = 'translateX(' + (-Width * count) + 'px)';
}
function moveLeft(firstElement, Width, elementLength, slg) {
    firstElement.style.transition = "transform 0.6s ease-in-out";
    count--;
    if (count < 0) {
        count = elementLength - slg;
    }
    firstElement.style.transform = 'translateX(' + (-Width * count) + 'px)';
}

//slide ====================================
var firstSlides = document.querySelector(".banner_img");
var slides = document.querySelectorAll(".banner_img .image");
var widthOfSlide = slides[0].clientWidth;

var timeNextSlide = setInterval(function () {
    firstSlides.style.transition = "transform 0.6s ease-in-out";
    count1++;
    if (count1 > slides.length - 1) {
        count1 = 0;
    }
    firstSlides.style.transform = 'translateX(' + (-widthOfSlide * count1) + 'px)';
}, 4000);

function btnSlideLeft() {
    moveLeft(firstSlides, widthOfSlide, slides.length, 1);
}
function btnSlideRight() {
    moveRight(firstSlides, widthOfSlide, slides.length, 1);
}

//btn click slide ================================
function currentSlide(e) {
    firstSlides.style.transition = "transform 0.4s ease-in-out";
    count = e;
    firstSlides.style.transform = 'translateX(' + (-widthOfSlide * count) + 'px)';
}

//new product========================================
var firstNewPro = document.querySelector(".new_1 .pro_main");
var products = document.querySelectorAll(".new_1 .pro_main .product_1");
var widthOfNew = products[0].clientWidth;

function btnProductLeft() {
    moveLeft(firstNewPro, widthOfNew, products.length, 4);
}

function btnProductRight() {
    moveRight(firstNewPro, widthOfNew, products.length, 4);
}

//latest product ================================================
var firstLatePro = document.querySelector(".new_2 .pro_main");
var latest = document.querySelectorAll(".new_2 .pro_main .product_2");
var widthOfLate = latest[0].clientWidth;

function btnLateProLeft() {
    moveLeft(firstLatePro, widthOfLate, latest.length, 5);
}

function btnLateProRight() {
    moveRight(firstLatePro, widthOfLate, latest.length, 5);
}

//featured product==============================================
var firstFeature = document.querySelector(".feature_main");
var features = document.querySelectorAll(".feature_main .feature_sp");
var widthOfFeature = features[0].clientWidth;

function btnFeatureProLeft() {
    moveLeft(firstFeature, widthOfFeature - 35, features.length, 3);
}
function btnFeatureProRight() {
    moveRight(firstFeature, widthOfFeature - 35, features.length, 3);
}

//hot deal
var firstHot = document.querySelector(".deal_1 .hot_main");
var hotDeals = document.querySelectorAll(".deal_1 .hot_main .hot_product");
var widthOfHot = hotDeals[0].clientWidth;

function btnHotDealLeft() {
    moveLeft(firstHot, widthOfHot, hotDeals.length, 1);
}
function btnHotDealRight() {
    moveRight(firstHot, widthOfHot, hotDeals.length, 1);
}

//special deal
var firstSpecial = document.querySelector(".deal_2 .hot_main");
var specialDeals = document.querySelectorAll(".deal_2 .hot_main .hot_product");
var widthOfSpecial = specialDeals[0].clientWidth;

function btnSpecialDealLeft() {
    moveLeft(firstSpecial, widthOfSpecial, specialDeals.length, 1);
}
function btnSpecialDealRight() {
    moveRight(firstSpecial, widthOfSpecial, specialDeals.length, 1);
}