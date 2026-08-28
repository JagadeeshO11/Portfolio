/* =============================
   PORTFOLIO INTERACTIONS
   ============================= */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Cursor glow */
const glow = document.querySelector('.cursor-glow');
if (glow) {
  window.addEventListener('pointermove', ({ clientX, clientY }) => {
    glow.style.left = `${clientX}px`;
    glow.style.top = `${clientY}px`;
  }, { passive: true });
}

/* Smooth anchor navigation */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  });
});

if (!reduceMotion) {
  /* Scroll reveal */
  const revealStyle = document.createElement('style');
  revealStyle.textContent = `
    .reveal{opacity:0;transform:translateY(32px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1)}
    .reveal.is-visible{opacity:1;transform:none}
    .reveal.delay-1{transition-delay:.12s}
    .reveal.delay-2{transition-delay:.24s}
    .scroll-progress{position:fixed;top:0;left:0;width:100%;height:3px;transform-origin:left center;transform:scaleX(0);z-index:99999;background:#71f5bf;box-shadow:0 0 14px rgba(113,245,191,.7);pointer-events:none}
  `;
  document.head.appendChild(revealStyle);

  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  document.body.appendChild(progress);

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  /* Typewriter */
  const role = document.querySelector('.typing-role');
  const text = role?.querySelector('.typing-text');
  if (role && text) {
    const roles = ['Full Stack Developer', 'React Developer', 'AI / IoT Builder', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      const word = roles[roleIndex];
      text.textContent = word.slice(0, charIndex);
      if (!deleting) {
        if (charIndex < word.length) {
          charIndex += 1;
          setTimeout(type, 68);
        } else {
          deleting = true;
          setTimeout(type, 1450);
        }
      } else if (charIndex > 0) {
        charIndex -= 1;
        setTimeout(type, 38);
      } else {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 300);
      }
    };
    type();
  }

  /* Gentle 3D tilt for selected cards */
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    const max = Number(card.dataset.tiltMax || 6);
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateZ(4px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });

  /* Finite toolkit perspective. No cloning, no infinite loop. */
  const toolkit = document.querySelector('[data-stack-marquee]');
  const track = toolkit?.querySelector('.stack-track');
  if (toolkit && track) {
    const updateFocus = () => {
      const center = toolkit.getBoundingClientRect().left + toolkit.clientWidth / 2;
      [...track.children].forEach((card) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - center);
        const range = Math.max(220, toolkit.clientWidth * 0.45);
        const focus = Math.max(0, 1 - distance / range);
        const rotation = ((rect.left + rect.width / 2 - center) / range) * -8;
        card.style.transform = `translateY(${-focus * 16}px) scale(${0.82 + focus * 0.18}) rotateY(${rotation}deg)`;
        card.style.opacity = `${0.42 + focus * 0.58}`;
        card.style.filter = `saturate(${0.7 + focus * 0.3}) blur(${Math.max(0, (distance - 260) / 160).toFixed(2)}px)`;
      });
    };

    toolkit.addEventListener('scroll', updateFocus, { passive: true });
    window.addEventListener('resize', updateFocus, { passive: true });
    requestAnimationFrame(updateFocus);
  }
}
