// Project cards intentionally stay flat and calm. Their only motion is the subtle CSS hover lift.
const projectCards = document.querySelectorAll('[data-site-card]');
projectCards.forEach(card => card.classList.remove('is-active'));

// Load the responsive typewriter fix after the legacy script has initialized.
const typewriterFix = document.createElement('script');
typewriterFix.src = './typewriter-fix.js';
typewriterFix.defer = false;
document.body.appendChild(typewriterFix);
