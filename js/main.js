document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

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

// reload input
function clearInput() {
    document.querySelector('.input').value = '';
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
let images = document.querySelectorAll('.all-book .card');


searchBox.oninput = () => {
    images.forEach(hide => hide.style.display = 'none');
    let value = searchBox.value;
    images.forEach(filter => {
        let title = filter.getAttribute('data-title');
        if (value == title) {
            filter.style.display = 'flex';
        }
    });
};

// scroll bottom screen wkwkw
    // window.onscroll = function() {
    //     var waIcon = document.querySelector(".wa-float");
    //     if (document.documentElement.scrollTop > 100) {
    //         waIcon.style.display = "block";
    //     } else {
    //         waIcon.style.display = "none";
    //     }
    // };
