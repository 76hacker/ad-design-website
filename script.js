// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// CTA button alert
document.getElementById('cta-button').addEventListener('click', () => {
    alert('Thanks for your interest! Contact us for a quote.');
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! We\'ll get back to you soon.');
    // In a real site, you'd send this to a server (e.g., via Fetch API or a service like Formspree)
});