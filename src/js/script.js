let currentIndex = 0;

function move(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    items[currentIndex].classList.add('active');

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

function jumpTo(index) {
    currentIndex = index;
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.classList.remove('active'));
    items[currentIndex].classList.add('active');

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}
