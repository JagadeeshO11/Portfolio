const glow=document.querySelector('.cursor-glow');

window.addEventListener('pointermove',e=>{
  if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}
});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const el=document.querySelector(a.getAttribute('href'));
  if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}
}));

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if(!reduceMotion){
  document.querySelectorAll('[data-tilt]').forEach(card=>{
    const max=Number(card.dataset.tiltMax||6);
    const reset=()=>{card.style.transform='perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)'};
    card.addEventListener('pointermove',e=>{
      const rect=card.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-.5;
      const y=(e.clientY-rect.top)/rect.height-.5;
      card.style.transform=`perspective(900px) rotateX(${(-y*max).toFixed(2)}deg) rotateY(${(x*max).toFixed(2)}deg) translateZ(4px)`;
    });
    card.addEventListener('pointerleave',reset);
  });
}
