'use strict';

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Enroll Button Handlers
const enrollButtons = document.querySelectorAll('.enroll-btn');

enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for enrolling!');
    });
});

// Responsive Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});