// Simple slideshow (Gallery page)
document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slideshow img");

    console.log("Slides found:", slides.length); // IMPORTANT TEST

    if (slides.length === 0) return;

    let current = 0;

    function showSlide(index) {
        slides.forEach(img => img.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    showSlide(0);
    setInterval(nextSlide, 3000);

});