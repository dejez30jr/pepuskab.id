document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);


const menuIcon = document.getElementById("menu-icon")
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", ()=>{
  menuList.classList.toggle("hidden")
})



// scroll mouse
document.querySelector('.card').addEventListener("wheel", function(event){
    if(event.deltaY > 0){
        this.scrollLeft += 50;
    }else{
        this.scrollLeft -= 50;
    }
})



// loading web
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 5000);
});


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



const clsEror= document.getElementById("cls-eror");
clsEror.addEventListener("click", ()=>{
    alert('mungkin sementara waktu kelas ini tidak ada kelas gratis');
});




// const view = document.getElementById("view")
// view.addEventListener("click", ()=>{
// alert('lanjut ke halaman web')
// })
