(() => {
  'use strict';
  const toggle=document.getElementById('nav-toggle'), nav=document.getElementById('main-navigation');
  if(toggle&&nav) toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});
  document.querySelectorAll('.main-nav .nav-link').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('is-open')));
  const input=document.getElementById('service-search'), results=document.getElementById('search-results'), clear=document.getElementById('search-clear');
  const normalize=v=>String(v||'').toLowerCase();
  function render(q){
    if(!results||!input)return;
    const query=normalize(q).trim();
    if(!query){results.hidden=true;results.innerHTML='';return;}
    const data=(window.services||[]).map(s=>({name:s.nama,cat:s.kategori,id:s.id}));
    const extra=[
      {name:'VG CHECK',cat:'Paket VG',id:'vg-check'},
      {name:'VG TUNE',cat:'Paket VG',id:'vg-tune'},
      {name:'VG BRAKE SERVICE',cat:'Paket VG',id:'vg-brake-service'},
      {name:'VG OIL SERVICE',cat:'Paket VG',id:'vg-oil-service'}
    ];
    const matches=[...extra,...data].filter(x=>normalize(`${x.name} ${x.cat}`).includes(query)).slice(0,8);
    results.innerHTML=matches.length?matches.map(x=>`<div class="search-result" data-search-id="${x.id}"><div><strong>${x.name}</strong><small>${x.cat}</small></div><span>→</span></div>`).join(''):`<div class="search-result"><div><strong>Tidak ditemukan</strong><small>Coba kata kunci lain.</small></div></div>`;
    results.hidden=false;
  }
  input?.addEventListener('input',e=>render(e.target.value));
  clear?.addEventListener('click',()=>{input.value='';render('');input.focus()});
  document.addEventListener('click',e=>{
    const r=e.target.closest('.search-result[data-search-id]');
    if(r){const id=r.dataset.searchId;input.value='';render('');if(id==='vg-tune')window.VGPopup?.openPackage();else if(id==='vg-check'||id==='vg-brake-service'||id==='vg-oil-service')window.VGPopup?.openService(id);else window.VGPopup?.openService(id);}
    if(!e.target.closest('.search-wrap')){if(results)results.hidden=true}
  });
})();
