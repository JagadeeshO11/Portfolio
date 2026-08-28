(() => {
  const role = document.querySelector('.hero h1 em');
  const photo = document.querySelector('.profile-photo');
  if (!role) return;

  const style = document.createElement('style');
  style.textContent = `
    .hero h1 em.typing-role-fix{
      display:inline-grid;
      position:relative;
      max-width:100%;
      font-style:normal;
      color:#9cb0dd;
      white-space:nowrap;
      vertical-align:baseline;
    }
    .typing-role-fix .typing-measure-fix,
    .typing-role-fix .typing-text-fix{
      grid-area:1/1;
    }
    .typing-role-fix .typing-measure-fix{
      visibility:hidden;
      pointer-events:none;
      user-select:none;
    }
    .typing-role-fix .typing-text-fix{
      white-space:nowrap;
    }
    .typing-cursor-fix{
      display:inline-block;
      width:3px;
      height:.78em;
      margin-left:7px;
      vertical-align:-.04em;
      background:currentColor;
      animation:typing-blink-fix .75s step-end infinite;
    }
    .profile-photo{
      width:112px;
      height:112px;
      object-fit:cover;
      object-position:center top;
      display:block;
      border-radius:28px;
      margin:0 0 20px;
      border:2px solid rgba(113,245,191,.3);
      box-shadow:0 18px 35px rgba(0,0,0,.28);
      background:#111722;
    }
    @keyframes typing-blink-fix{50%{opacity:0}}
    @media(max-width:600px){
      .hero h1 em.typing-role-fix{white-space:normal;max-width:100%;}
      .typing-role-fix .typing-measure-fix,.typing-role-fix .typing-text-fix{white-space:normal;}
      .profile-photo{width:96px;height:96px;border-radius:24px}
    }
  `;
  document.head.appendChild(style);

  const roles = ['Full Stack Developer','React Developer','AI / IoT Builder','Problem Solver'];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  role.classList.add('typing-role-fix');
  role.innerHTML = '<span class="typing-measure-fix"></span><span class="typing-text-fix"></span>';
  const measure = role.querySelector('.typing-measure-fix');
  const text = role.querySelector('.typing-text-fix');
  measure.textContent = roles.reduce((a,b) => a.length >= b.length ? a : b);

  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor-fix';

  function tick(){
    const word = roles[roleIndex];
    text.textContent = word.slice(0,charIndex);
    text.appendChild(cursor);
    if(!deleting){
      charIndex++;
      if(charIndex > word.length){
        charIndex = word.length;
        deleting = true;
        setTimeout(tick,1600);
        return;
      }
      setTimeout(tick,70);
    }else{
      charIndex--;
      if(charIndex < 0){
        charIndex = 0;
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick,350);
        return;
      }
      setTimeout(tick,40);
    }
  }
  tick();

  if(photo){
    photo.addEventListener('error',()=>{
      photo.style.display='none';
    },{once:true});
  }
})();
