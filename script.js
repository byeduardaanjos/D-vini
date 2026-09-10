document.addEventListener('DOMContentLoaded',()=>{
  const modern=document.createElement('link');modern.rel='stylesheet';modern.href='modern.css?v=5';document.head.appendChild(modern);
  const premium=document.createElement('link');premium.rel='stylesheet';premium.href='premium.css?v=5';document.head.appendChild(premium);
  if(window.lucide)lucide.createIcons();
  const menu=document.getElementById('menu');
  const nav=document.getElementById('nav');
  menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
});