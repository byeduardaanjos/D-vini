document.addEventListener('DOMContentLoaded',()=>{
  const modern=document.createElement('link');modern.rel='stylesheet';modern.href='modern.css?v=4';document.head.appendChild(modern);
  const premium=document.createElement('link');premium.rel='stylesheet';premium.href='premium.css?v=4';document.head.appendChild(premium);

  document.querySelectorAll('.brand-logo').forEach(img=>{img.src='assets/logo-vini-oficial.png?v=3';img.onerror=()=>{img.src='assets/vini-logo.png?v=3'}});
  const favicon=document.querySelector('link[rel="icon"]');if(favicon)favicon.href='assets/logo-vini-oficial.png?v=3';

  if(window.lucide)lucide.createIcons();

  const menu=document.getElementById('menu');
  const nav=document.getElementById('nav');
  menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

  const goToDemo=()=>{window.location.href='agendamento.html'};

  document.querySelectorAll('[data-open-booking]:not(.booking-card)').forEach(el=>{
    el.addEventListener('click',e=>{e.preventDefault();goToDemo()});
  });

  document.querySelectorAll('a[href="#agendamento"]').forEach(el=>{
    el.addEventListener('click',e=>{e.preventDefault();goToDemo()});
  });

  document.querySelectorAll('.booking-card').forEach(card=>{
    const text=(card.textContent||'').toLowerCase();
    card.addEventListener('click',e=>{
      e.preventDefault();
      if(text.includes('whatsapp')){
        const msg=encodeURIComponent('Olá! Gostaria de falar com a Barbearia do Vini sobre um agendamento.');
        window.open('https://wa.me/?text='+msg,'_blank','noopener,noreferrer');
      }else{
        goToDemo();
      }
    });
  });
});