let currentIndex = 0;
let autoSlideInterval;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    document.querySelector('.slides').style.transform = `translateX(${-currentIndex * 100}%)`;
}

function moveSlide(n) {
    showSlides(currentIndex + n);
    resetAutoSlide();
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlides(currentIndex + 1);
    }, 5000); // Change image every 5 seconds
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

window.onload = function() {
    showSlides(currentIndex);
    autoSlide();
};

// filter data nya

let searchBox = document.querySelector('#search');
let images = document.querySelectorAll('.card .card-item');


searchBox.oninput = () => {
    images.forEach(hide => hide.style.display = 'none');
    let value = searchBox.value;
    images.forEach(filter => {
        let title = filter.getAttribute('data-title');
        if (value == title) {
            filter.style.display = 'block';
        }
    });
};