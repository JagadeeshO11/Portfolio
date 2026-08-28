const glow=document.querySelector('.cursor-glow');

window.addEventListener('pointermove',e=>{
  if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}
});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const el=document.querySelector(a.getAttribute('href'));
  if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'})}
}));

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if(!reduceMotion){
  const style=document.createElement('style');
  style.textContent=`
    .reveal{opacity:0;transform:translateY(28px);transition:opacity .75s cubic-bezier(.2,.7,.2,1),transform .75s cubic-bezier(.2,.7,.2,1)}
    .reveal.is-visible{opacity:1;transform:none}
    .reveal.delay-1{transition-delay:.12s}
    .reveal.delay-2{transition-delay:.22s}
    .typing-cursor{display:inline-block;width:3px;height:.78em;margin-left:6px;vertical-align:-.04em;background:currentColor;animation:typing-blink .75s step-end infinite}
    @keyframes typing-blink{50%{opacity:0}}
    .scroll-progress{position:fixed;top:0;left:0;width:100%;height:2px;transform-origin:left center;transform:scaleX(0);z-index:9999;background:#71f5bf;box-shadow:0 0 12px rgba(113,245,191,.65);pointer-events:none}
  `;
  document.head.appendChild(style);

  const progress=document.createElement('div');
  progress.className='scroll-progress';
  document.body.appendChild(progress);

  const updateProgress=()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    progress.style.transform=`scaleX(${max>0?window.scrollY/max:0})`;
  };
  window.addEventListener('scroll',updateProgress,{passive:true});
  updateProgress();

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -45px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  const target=document.querySelector('.hero h1 em');
  if(target){
    const roles=['Full Stack Developer','React Developer','AI / IoT Builder','Problem Solver'];
    let roleIndex=0,charIndex=0,deleting=false;
    const cursor=document.createElement('span');
    cursor.className='typing-cursor';
    target.textContent='';
    target.appendChild(cursor);

    const type=()=>{
      const word=roles[roleIndex];
      if(!deleting){
        charIndex++;
        cursor.before(document.createTextNode(word.slice(charIndex-1,charIndex)));
        if(charIndex===word.length){deleting=true;setTimeout(type,1700);return}
        setTimeout(type,75);
      }else{
        const text=target.firstChild;
        if(text&&text.nodeType===3){text.textContent=text.textContent.slice(0,-1);charIndex--}
        if(charIndex===0){deleting=false;roleIndex=(roleIndex+1)%roles.length;setTimeout(type,350);return}
        setTimeout(type,42);
      }
    };
    type();
  }

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
