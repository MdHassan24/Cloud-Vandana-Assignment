const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.avif',
    'images/image4.jpg',
];

let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    sliderImage.src = images[currentIndex];
}

prevBtn.addEventListener('click', function() {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    updateImage();
});

nextBtn.addEventListener('click', function() {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateImage();
});

updateImage();
