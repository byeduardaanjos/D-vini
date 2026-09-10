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
});