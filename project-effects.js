// Project cards intentionally stay flat and calm. Their only motion is the subtle CSS hover lift.
const projectCards = document.querySelectorAll('[data-site-card]');
projectCards.forEach(card => card.classList.remove('is-active'));
