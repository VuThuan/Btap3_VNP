var Slides_1 = document.querySelector(".image_container");
var slides = document.querySelectorAll(".image_container .image");

//button

var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

//Counter
var count = 1;
var size = slides[0].clientWidth;
//console.log(size);
Slides_1.style.transform = 'translateX(' + (-size * count) + 'px)';


//btn click

function Next(e) {
    Slides_1.style.transition = "transform 0.4s ease-in-out";
    count = e;
    Slides_1.style.transform = 'translateX(' + (-size * count) + 'px)';
}

nextBtn.addEventListener('click', function () {
    Slides_1.style.transition = "transform 0.4s ease-in-out";
    count++;
    if (count > 2) {
        count = 0;
    }
    console.log(count);
    Slides_1.style.transform = 'translateX(' + (-size * count) + 'px)';
});

prevBtn.addEventListener('click', function () {
    Slides_1.style.transition = "transform 0.4s ease-in-out";
    count--;
    if (count < 0) {
        count = 2;
    }
    Slides_1.style.transform = 'translateX(' + (-size * count) + 'px)';
});


