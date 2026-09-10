document.addEventListener('DOMContentLoaded',()=>{
  const modern=document.createElement('link');modern.rel='stylesheet';modern.href='modern.css?v=6';document.head.appendChild(modern);
  const premium=document.createElement('link');premium.rel='stylesheet';premium.href='premium.css?v=6';document.head.appendChild(premium);
  document.querySelectorAll('.brand-logo').forEach(img=>{
    img.src='assets/logo-vini-oficial.webp?v=1';
    img.onerror=()=>{img.src='assets/vini-logo.svg'};
  });
  const favicon=document.querySelector('link[rel="icon"]');
  if(favicon) favicon.href='assets/logo-vini-oficial.webp?v=1';
  if(window.lucide)lucide.createIcons();

  const menu=document.getElementById('menu');
  const nav=document.getElementById('nav');
  menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

  const motionStyle=document.createElement('style');
  motionStyle.textContent=`
    .reveal-lite{opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease}
    .reveal-lite.is-visible{opacity:1;transform:translateY(0)}
    .hero-copy h1,.hero-copy .eyebrow,.hero-copy .hero-text,.hero-actions,.hero-hours{animation:heroEnter .75s ease both}
    .hero-copy h1{animation-delay:.06s}.hero-copy .hero-text{animation-delay:.12s}.hero-actions{animation-delay:.18s}.hero-hours{animation-delay:.24s}
    @keyframes heroEnter{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
    .primary,.soft-btn,.plan-btn,.booking-card,.service-list a{transition:transform .22s ease,border-color .22s ease,background .22s ease,box-shadow .22s ease}
    @media (hover:hover){.primary:hover,.soft-btn:hover,.plan-btn:hover{transform:translateY(-2px)}.booking-card:hover,.service-list a:hover{transform:translateY(-3px)}}
    @media (prefers-reduced-motion:reduce){.reveal-lite,.hero-copy h1,.hero-copy .eyebrow,.hero-copy .hero-text,.hero-actions,.hero-hours{opacity:1!important;transform:none!important;animation:none!important;transition:none!important}}
  `;
  document.head.appendChild(motionStyle);

  const revealTargets=document.querySelectorAll('.section-head,.service-list a,.plan-card,.gallery figure,.info-main,.info-hours,.booking-card');
  revealTargets.forEach(el=>el.classList.add('reveal-lite'));
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver((entries,obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target)}
      });
    },{threshold:.12,rootMargin:'0px 0px -30px 0px'});
    revealTargets.forEach(el=>observer.observe(el));
  }else{
    revealTargets.forEach(el=>el.classList.add('is-visible'));
  }
});