let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.mySlides');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
    });
}

function nextImage() {
    const currentSlide = document.querySelectorAll('.mySlides')[currentIndex];
    const image1 = currentSlide.querySelector('.image-container .image');
    const image2 = currentSlide.querySelector('.image-container1 .image');

    // Appliquer la classe de mouvement à la première image
    image1.classList.add('move');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % document.querySelectorAll('.mySlides').length;
        showSlide(currentIndex);
        
        // Réinitialiser la position de l'image pour la nouvelle diapositive
        const nextImage1 = document.querySelectorAll('.mySlides')[currentIndex].querySelector('.image-container .image');
        nextImage1.classList.remove('move');
    }, 1000); // Correspond au temps de transition
}

function prevImage() {
    const currentSlide = document.querySelectorAll('.mySlides')[currentIndex];
    const image1 = currentSlide.querySelector('.image-container .image');
    const image2 = currentSlide.querySelector('.image-container1 .image');

    // Appliquer la classe de mouvement à la deuxième image
    image2.classList.add('move');

    setTimeout(() => {
        currentIndex = (currentIndex - 1 + document.querySelectorAll('.mySlides').length) % document.querySelectorAll('.mySlides').length;
        showSlide(currentIndex);
        
        // Réinitialiser la position de l'image pour la nouvelle diapositive
        const prevImage1 = document.querySelectorAll('.mySlides')[currentIndex].querySelector('.image-container .image');
        prevImage1.classList.remove('move');
    }, 1000); // Correspond au temps de transition
}

showSlide(currentIndex);
