const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");
const images = document.querySelector(".images");

const allImages = Array.from(images.querySelectorAll("img"));
let currentIndex = 0;

function showImage() {
    allImages.forEach((image, index) => {
        image.style.display = index === currentIndex ? "block" : "none";
    });
}

function nextImage() {
    currentIndex = currentIndex + 1;
    if (currentIndex == 6) {
        currentIndex = 0;
    }
    showImage();
}

function prevImage() {
    currentIndex = currentIndex - 1;
    if (currentIndex == -1) {
        currentIndex = 5;
    }
    showImage();
}

next.addEventListener('click', nextImage);
prev.addEventListener('click', prevImage);
showImage();