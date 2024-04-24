document.addEventListener('DOMContentLoaded', function () {

    const slides = document.querySelectorAll('.slider img');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    let currentIndex = 0;
    let timer;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
        restartTimer();
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
        restartTimer();
    }

    function restartTimer() {
        clearInterval(timer);
        timer = setInterval(nextSlide, 3000);
    }

    showSlide(currentIndex);
    restartTimer();

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            prevSlide();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
        }
    });

    const prevButton = document.querySelector('.previous');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', function () {
        prevSlide();
    });

    nextButton.addEventListener('click', function () {
        nextSlide();
    });
});