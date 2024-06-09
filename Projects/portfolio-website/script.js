// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Simple form validation
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function (e) {
    const emailField = document.querySelector('input[type="email"]');
    if (!emailField.value.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});
