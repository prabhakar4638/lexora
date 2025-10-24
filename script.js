// Simple image slider for gallery
const galleryImages = document.querySelectorAll('.gallery-slider img');
let currentImageIndex = 0;

function showImage(index) {
    galleryImages.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentImageIndex);
}

// Initialize slider
showImage(currentImageIndex);

// Auto slide every 3 seconds
setInterval(nextImage, 3000);

// Add event listeners for manual navigation (if buttons are added later)
document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for future navigation buttons
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('.contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});