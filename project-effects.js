const cards = [...document.querySelectorAll('[data-site-card]')];

if (cards.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let ticking = false;

  const update = () => {
    const viewportCenter = window.innerHeight * 0.5;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distance = cardCenter - viewportCenter;
      const normalized = Math.max(-1, Math.min(1, distance / (window.innerHeight * 0.62)));
      const focus = 1 - Math.min(1, Math.abs(normalized));

      // Subtle stacked-card depth. The center card stays readable and calm.
      const scale = 0.94 + focus * 0.06;
      const rotateX = normalized * -2.8;
      const rotateY = normalized * 1.8;
      const translateZ = focus * 34;
      const lift = normalized * 12;

      card.style.transform = `translate3d(0, ${lift}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.opacity = String(0.72 + focus * 0.28);
      card.style.filter = `saturate(${0.86 + focus * 0.14})`;
      card.style.setProperty('--preview-shift', `${normalized * -14}px`);
      card.classList.toggle('is-active', focus > 0.72);
    });
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  update();
}
