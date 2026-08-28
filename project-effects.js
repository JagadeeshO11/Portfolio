/* =========================================================
   PROJECT SHOWCASE BEHAVIOR
   Keep the portfolio list curated in one place.
   ========================================================= */

const EXCLUDED_PROJECTS = new Set([
  'CleanAmerica Dallas',
  'GoldBowl',
  'NAH44',
  'MaxFineChem',
  'Certification',
  'ShopEZ',
  'MartX',
  'Carpe Ott'
]);

const projectCards = document.querySelectorAll('[data-site-card]');

projectCards.forEach((card) => {
  const title = card.querySelector('h3')?.textContent.trim();

  if (EXCLUDED_PROJECTS.has(title)) {
    card.remove();
  }
});

/* Renumber only the projects that remain visible. */
document.querySelectorAll('[data-site-card] .site-number').forEach((number, index) => {
  number.textContent = String(index + 1).padStart(2, '0');
});

/* Keep the legacy typewriter compatibility hook. */
const typewriterFix = document.createElement('script');
typewriterFix.src = './typewriter-fix.js';
typewriterFix.defer = false;
document.body.appendChild(typewriterFix);
