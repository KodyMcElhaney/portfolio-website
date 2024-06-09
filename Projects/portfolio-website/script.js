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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('form').addEventListener('submit', function (e) {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    if (nameField.value.trim() === '') {
        e.preventDefault();
        alert('Please enter your name.');
    } else if (!emailField.value.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    } else if (messageField.value.trim() === '') {
        e.preventDefault();
        alert('Please enter your message.');
    }
});

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
});
