const cards=[...document.querySelectorAll('[data-site-card]')];
if(cards.length&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const update=()=>{
  const center=window.innerHeight*.48;
  cards.forEach((card,i)=>{
   const r=card.getBoundingClientRect(), y=r.top+r.height/2, d=(y-center)/(window.innerHeight*.58), a=Math.max(0,1-Math.abs(d));
   const rotate=(i%2?-1:1)*d*8, scale=.82+a*.18, z=a*70;
   card.style.transform=`translate3d(0,${d*30}px,${z}px) rotateX(${d*5}deg) rotateY(${rotate}deg) scale(${scale})`;
   card.style.opacity=String(.42+a*.58);
   card.style.filter=`blur(${Math.max(0,(Math.abs(d)-.78)*2).toFixed(2)}px) saturate(${.7+a*.3})`;
   card.classList.toggle('is-active',a>.82);
  });
 };
 let ticking=false;
 const request=()=>{if(!ticking){requestAnimationFrame(()=>{update();ticking=false});ticking=true}};
 window.addEventListener('scroll',request,{passive:true});window.addEventListener('resize',request,{passive:true});update();
}