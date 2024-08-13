let currentIndex = 0;
let totalItems = document.querySelectorAll('.carousel-item').length;
const intervalTime = 5000; // Time in milliseconds

// Function to move the carousel
function move(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

// Function to jump to a specific slide
function jumpTo(index) {
    currentIndex = index;
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.classList.remove('active'));
    items[currentIndex].classList.add('active');
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

// Function to update the indicators
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Automatically move to the next slide every 2 seconds
setInterval(() => move(1), intervalTime);

