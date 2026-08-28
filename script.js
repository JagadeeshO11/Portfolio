/* =============================
   PORTFOLIO INTERACTIONS
   ============================= */
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Cursor glow */
const glow=document.querySelector('.cursor-glow');
if(glow)window.addEventListener('pointermove',({clientX,clientY})=>{glow.style.left=`${clientX}px`;glow.style.top=`${clientY}px`},{passive:true});

/* Live local date + time */
const liveDate=document.querySelector('#live-date');
const liveTime=document.querySelector('#live-time');
const updateClock=()=>{const now=new Date();if(liveDate)liveDate.textContent=new Intl.DateTimeFormat(undefined,{weekday:'short',day:'2-digit',month:'short',year:'numeric'}).format(now);if(liveTime)liveTime.textContent=new Intl.DateTimeFormat(undefined,{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now)};
updateClock();setInterval(updateClock,1000);

/* Smooth internal links */
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(!target)return;event.preventDefault();target.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'start'});}));

if(!reduceMotion){
  const style=document.createElement('style');style.textContent=`.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1)}.reveal.is-visible{opacity:1;transform:none}.reveal.delay-1{transition-delay:.12s}.scroll-progress{position:fixed;top:0;left:0;width:100%;height:3px;transform-origin:left;transform:scaleX(0);z-index:99999;background:#71f5bf;box-shadow:0 0 14px rgba(113,245,191,.7);pointer-events:none}`;document.head.appendChild(style);
  const progress=document.createElement('div');progress.className='scroll-progress';document.body.appendChild(progress);
  const updateProgress=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?scrollY/max:0})`};addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress,{passive:true});updateProgress();
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -40px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  /* Stable typewriter: measured invisible text reserves width, visible text never reflows */
  const role=document.querySelector('.typing-role'),text=role?.querySelector('.typing-text');
  if(role&&text){const roles=['Full Stack Developer','React Developer','AI / IoT Builder','Problem Solver'];let ri=0,ci=0,del=false;const type=()=>{const word=roles[ri];text.textContent=word.slice(0,ci);if(!del){if(ci<word.length){ci++;setTimeout(type,68)}else{del=true;setTimeout(type,1450)}}else if(ci>0){ci--;setTimeout(type,38)}else{del=false;ri=(ri+1)%roles.length;setTimeout(type,300)}};type()}
  /* Subtle profile/education tilt only */
  document.querySelectorAll('[data-tilt]').forEach(card=>{const max=Number(card.dataset.tiltMax||5);card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${(-y*max).toFixed(2)}deg) rotateY(${(x*max).toFixed(2)}deg) translateZ(3px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
  /* Finite toolkit focus, never clones or loops */
  const toolkit=document.querySelector('[data-stack-marquee]'),track=toolkit?.querySelector('.stack-track');
  if(toolkit&&track){const updateFocus=()=>{const center=toolkit.getBoundingClientRect().left+toolkit.clientWidth/2;[...track.children].forEach(card=>{const r=card.getBoundingClientRect(),distance=Math.abs(r.left+r.width/2-center),range=Math.max(220,toolkit.clientWidth*.45),focus=Math.max(0,1-distance/range),rotation=((r.left+r.width/2-center)/range)*-7;card.style.transform=`translateY(${-focus*14}px) scale(${.84+focus*.16}) rotateY(${rotation}deg)`;card.style.opacity=.48+focus*.52;card.style.filter=`saturate(${.72+focus*.28}) blur(${Math.max(0,(distance-270)/180).toFixed(2)}px)`})};toolkit.addEventListener('scroll',updateFocus,{passive:true});addEventListener('resize',updateFocus,{passive:true});requestAnimationFrame(updateFocus)}}
