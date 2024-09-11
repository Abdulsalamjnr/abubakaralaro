let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

const reviewCards = document.querySelectorAll('.review-card');
let currentIndex = 0;

function showCard(index) {
    reviewCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

function nextCard() {
    currentIndex = (currentIndex + 1) % reviewCards.length;
    showCard(currentIndex);
}

function previousCard() {
    currentIndex = (currentIndex - 1 + reviewCards.length) % reviewCards.length;
    showCard(currentIndex);
}

// Auto-slide every 3 seconds
setInterval(nextCard, 3000);

// Initial display
showCard(currentIndex);

