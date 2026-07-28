/* =========================================================
   VRRINS GARAGE — POPUP SYSTEM V2
   MASTER FLOW:
   Paket Perawatan VG → VG Tune → Mesin → Detail → WhatsApp
   Kondisi Mobil → Kategori → Layanan → Detail → WhatsApp
   ========================================================= */
(() => {
  'use strict';

  const WA_NUMBER = '62895622499262';
  const WA_BASE = `https://wa.me/${WA_NUMBER}`;
  const modal = document.getElementById('vg-modal');
  const content = document.getElementById('vg-modal-content');

  const CATEGORY_META = {
    'MESIN': { icon:'⚙', title:'MESIN', desc:'Pemeriksaan & perawatan sistem mesin kendaraan.', image:'images/category-mesin.webp' },
    'PELUMASAN': { icon:'💧', title:'PELUMASAN', desc:'Pemeriksaan & perawatan sistem pelumasan kendaraan.', image:'images/category-pelumasan.webp' },
    'BAHAN BAKAR': { icon:'⛽', title:'BAHAN BAKAR', desc:'Pemeriksaan & perawatan sistem bahan bakar.', image:'images/category-bahan-bakar.webp' },
    'SUSPENSI': { icon:'🚙', title:'SUSPENSI', desc:'Pemeriksaan & perawatan sistem suspensi.', image:'images/category-suspensi.webp' },
    'KEMUDI': { icon:'🎯', title:'KEMUDI', desc:'Pemeriksaan & perawatan sistem kemudi kendaraan.', image:'images/category-kemudi.webp' },
    'REM': { icon:'🛑', title:'REM', desc:'Pemeriksaan & perawatan sistem pengereman.', image:'images/category-rem.webp' },
    'PENDINGIN': { icon:'🌡', title:'PENDINGIN', desc:'Pemeriksaan & perawatan sistem pendingin kendaraan.', image:'images/category-pendingin.webp' },
    'TRANSMISI': { icon:'⚙', title:'TRANSMISI', desc:'Pemeriksaan & perawatan sistem transmisi.', image:'images/category-transmisi.webp' },
    'KELISTRIKAN MESIN': { icon:'⚡', title:'KELISTRIKAN', desc:'Pemeriksaan kelistrikan & komponen elektronik.', image:'images/category-kelistrikan.webp' }
  };

  const TUNE_META = {
    bensin: { title:'VG TUNE BENSIN', image:'images/vg-tune-bensin.webp', desc:'Paket tune untuk kendaraan bermesin bensin.' },
    diesel: { title:'VG TUNE DIESEL', image:'images/vg-tune-diesel.webp', desc:'Paket tune untuk kendaraan bermesin diesel.' }
  };

  const PACKAGE_META = {
    'vg-check': { badge:'REKOMENDASI', image:'images/vg-check.webp' },
    'vg-brake-service': { badge:'POPULAR', image:'images/vg-brake-service.webp' },
    'vg-oil-service': { badge:'REKOMENDASI', image:'images/vg-oil-service.webp' }
  };

  const esc = (v='') => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const arr = v => Array.isArray(v) ? v : (v ? [v] : []);
  const all = () => Array.isArray(window.services) ? window.services : [];
  const find = id => all().find(s => String(s.id) === String(id));
  const byCategory = cat => all().filter(s => String(s.kategori || '').toUpperCase() === String(cat).toUpperCase());

  function image(src, alt='') {
    return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.onerror=null;this.src='images/service-placeholder.webp'">`;
  }

  function open(rendered) {
    content.innerHTML = rendered;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('popup-open');
    content.scrollTop = 0;
  }

  function close() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('popup-open');
  }

  function head(title, eyebrow='') {
    return `<div class="vg-popup-head"><span class="vg-popup-eyebrow">${esc(eyebrow)}</span><h2 id="vg-modal-title">${esc(title)}</h2></div>`;
  }

  function back(action, label='Kembali') {
    return `<button class="vg-back" type="button" data-action="${esc(action)}">← ${esc(label)}</button>`;
  }

  function card({imageSrc, title, desc='', badge='', meta='', action, button='LIHAT DETAIL'}) {
    return `<article class="vg-popup-card">
      <div class="vg-popup-card__media">
        ${image(imageSrc, title)}
        ${badge ? `<span class="vg-popup-badge">${esc(badge)}</span>` : ''}
      </div>
      <div class="vg-popup-card__body">
        <h3>${esc(title)}</h3>
        <p>${esc(desc)}</p>
        ${meta ? `<div class="vg-popup-meta">${meta}</div>` : ''}
        <button class="vg-popup-button" type="button" data-action="${esc(action)}">${esc(button)}</button>
      </div>
    </article>`;
  }

  /* LEVEL 1 — PAKET PERAWATAN VG */
  function renderPackageRoot() {
    const check = find('vg-check');
    const brake = find('vg-brake-service');
    const oil = find('vg-oil-service');
    const packageCard = (id, name, fallbackDesc) => {
      const s = find(id);
      const m = PACKAGE_META[id];
      return card({
        imageSrc:m.image,
        title:name,
        desc:s?.deskripsi || fallbackDesc,
        badge:m.badge,
        meta:s ? `${esc(s.harga || '-')} &nbsp; • &nbsp; ${esc(s.durasi || '-')}` : '',
        action:`service:${id}`
      });
    };

    return `${head('PAKET PERAWATAN VG','LAYANAN VG')}
      <p class="vg-popup-intro">Pilih paket perawatan sesuai kebutuhan mobilnyo.</p>
      <div class="vg-popup-grid vg-popup-grid--package">
        ${packageCard('vg-check','VG CHECK','Scan & cek fisik kendaraan.')}
        <article class="vg-popup-card">
          <div class="vg-popup-card__media">${image('images/vg-tune.webp','VG TUNE')}<span class="vg-popup-badge vg-popup-badge--best">POPULAR</span></div>
          <div class="vg-popup-card__body">
            <h3>VG TUNE</h3>
            <p>Tune Up Mesin Bensin &amp; Diesel.</p>
            <div class="vg-popup-meta">2 Jenis Mesin &nbsp; • &nbsp; 8 pilihan paket/add-on</div>
            <button class="vg-popup-button" type="button" data-action="tune-root">LIHAT PAKET</button>
          </div>
        </article>
        ${packageCard('vg-brake-service','VG BRAKE SERVICE','Servis sistem rem kendaraan.')}
        ${packageCard('vg-oil-service','VG OIL SERVICE','Ganti oli mesin, transmisi, atau gardan sesuai kebutuhan.')}
      </div>`;
  }

  /* LEVEL 2 — VG TUNE */
  function renderTuneRoot() {
    return `${head('VG TUNE','PAKET PERAWATAN VG')}
      ${back('package-root')}
      <div class="vg-popup-cover">
        ${image('images/vg-tune.webp','VG TUNE')}
        <div><h3>VG TUNE</h3><p>Servis tune untuk kendaraan bensin maupun diesel.</p><strong>2 Jenis Mesin</strong></div>
      </div>
      <div class="vg-popup-grid vg-popup-grid--2">
        ${card({imageSrc:TUNE_META.bensin.image,title:'VG TUNE BENSIN',desc:TUNE_META.bensin.desc,meta:'4 Paket',action:'tune:bensin',button:'LIHAT PAKET'})}
        ${card({imageSrc:TUNE_META.diesel.image,title:'VG TUNE DIESEL',desc:TUNE_META.diesel.desc,meta:'4 Paket',action:'tune:diesel',button:'LIHAT PAKET'})}
      </div>`;
  }

  /* LEVEL 3 — PAKET BENSIN / DIESEL */
  function tuneItems(type) {
    const base = all().filter(s => s.kategori === 'VG TUNE' && String(s.id).endsWith(`-${type}`));
    const addon = find(type === 'bensin' ? 'vg-addon-gurah-karbon' : 'vg-addon-diesel-purging');
    return [...base, ...(addon ? [addon] : [])];
  }

  function renderTuneList(type) {
    const meta = TUNE_META[type];
    const items = tuneItems(type);
    return `${head(meta.title,'VG TUNE')}
      ${back('tune-root')}
      <div class="vg-popup-cover">
        ${image(meta.image,meta.title)}
        <div><h3>${esc(meta.title)}</h3><p>${esc(meta.desc)}</p><strong>${items.length} Paket</strong></div>
      </div>
      <div class="vg-popup-grid">
        ${items.map(s => card({
          imageSrc:`images/services/${s.id}.webp`,
          title:s.nama,
          desc:s.deskripsi || '',
          badge:s.id.includes('addon') ? 'ADD-ON' : (s.id.includes('pro') ? 'PREMIUM' : s.id.includes('plus') ? 'REKOMENDASI' : 'HEMAT'),
          meta:`${esc(s.harga || '-')} &nbsp; • &nbsp; ${esc(s.durasi || '-')}`,
          action:`service:${s.id}`
        })).join('')}
      </div>`;
  }

  /* LEVEL 1 — KONDISI MOBIL */
  function renderSystemRoot() {
    return `${head('LAYANAN BERDASARKAN KONDISI MOBIL ANDA','PILIH SISTEM KENDARAAN')}
      <p class="vg-popup-intro">Pilih bagian mobil yang mengalami keluhan. Kito bantu arahkan ke layanan yang sesuai.</p>
      <div class="vg-popup-grid vg-popup-grid--system">
        ${Object.entries(CATEGORY_META).map(([key,m]) => card({
          imageSrc:m.image,
          title:m.title,
          desc:m.desc,
          badge:key === 'SUSPENSI' ? 'REKOMENDASI' : key === 'MESIN' ? 'PREMIUM' : key === 'PELUMASAN' ? 'HEMAT' : 'POPULAR',
          meta:`${byCategory(key).length} Layanan`,
          action:`category:${key}`
        })).join('')}
      </div>`;
  }

  /* LEVEL 2 — DETAIL KATEGORI */
  function renderCategory(cat) {
    const meta = CATEGORY_META[cat];
    const items = byCategory(cat);
    if (!meta) return renderSystemRoot();
    return `${head(meta.title,'LAYANAN BERDASARKAN KONDISI MOBIL ANDA')}
      ${back('system-root')}
      <div class="vg-popup-cover">
        ${image(meta.image,meta.title)}
        <div><h3>${meta.icon} ${esc(meta.title)}</h3><p>${esc(meta.desc)}</p><strong>${items.length} Layanan</strong></div>
      </div>
      <div class="vg-popup-grid">
        ${items.map(s => card({
          imageSrc:`images/services/${s.id}.webp`,
          title:s.nama,
          desc:s.deskripsi || '',
          meta:`${esc(s.harga || '-')} &nbsp; • &nbsp; ${esc(s.durasi || '-')}`,
          action:`service:${s.id}:category:${cat}`
        })).join('')}
      </div>`;
  }

  /* FINAL LEVEL — DETAIL PAKET / LAYANAN */
  function renderService(id, backAction='package-root') {
    const s = find(id);
    if (!s) return `${head('Layanan Tidak Ditemukan')} ${back(backAction)}`;
    const work = arr(s.pekerjaan).map(x => `<li>${esc(x)}</li>`).join('');
    const excluded = arr(s.tidakTermasuk).map(x => `<li>${esc(x)}</li>`).join('');
    const note = s.catatan || 'Estimasi biaya dapat berubah sesuai kondisi kendaraan. Pekerjaan tambahan akan dikonfirmasi terlebih dahulu.';
    const gallery = [1,2,3].map(n => image(`images/gallery/${s.id}-${n}.webp`,`${s.nama} ${n}`)).join('');
    const msg = bookingMessage(s);

    return `${head(s.nama,s.kategori)}
      ${back(backAction)}
      <div class="vg-detail-media">${image(`images/services/${s.id}.webp`,s.nama)}</div>
      <div class="vg-detail-head">
        <span class="vg-popup-label">${esc(s.kategori)}</span>
        <h3>${esc(s.nama)}</h3>
        <p>${esc(s.deskripsi || '')}</p>
      </div>
      <div class="vg-detail-stats">
        <div><small>Estimasi Biaya</small><strong>${esc(s.harga || '-')}</strong></div>
        <div><small>Estimasi Waktu</small><strong>${esc(s.durasi || '-')}</strong></div>
      </div>
      <div class="vg-detail-section"><h4>PEKERJAAN YANG DILAKUKAN</h4><ul>${work || '<li>Disesuaikan berdasarkan hasil pemeriksaan.</li>'}</ul></div>
      <div class="vg-detail-section"><h4>YANG TIDAK TERMASUK</h4><ul class="is-excluded">${excluded || '<li>Sparepart/material pengganti.</li>'}</ul></div>
      <div class="vg-detail-section"><h4>CATATAN</h4><p>${esc(note)}</p></div>
      <div class="vg-gallery"><h4>GALERI HASIL PEKERJAAN</h4><div class="vg-gallery-grid">${gallery}</div></div>
      <a class="vg-wa-button" target="_blank" rel="noopener" href="${WA_BASE}?text=${encodeURIComponent(msg)}">🟢 BOOKING WHATSAPP</a>`;
  }

  function bookingMessage(s) {
    return `Halo Vrrins Garage 👋\n\nSaya nak booking layanan:\n${s.nama}\n\nKendaraan:\n• Tipe/Merek:\n• Tahun:\n• Keluhan utama:\n• Lokasi:\n\nMohon info ketersediaan jadwal dan estimasi pengerjaannya. Terima kasih.`;
  }

  function routeService(id, backAction='package-root') {
    open(renderService(id, backAction));
  }

  document.addEventListener('click', event => {
    const closeButton = event.target.closest('[data-popup-close]');
    if (closeButton) return close();

    const actionEl = event.target.closest('[data-action]');
    if (!actionEl) return;
    const action = actionEl.dataset.action;

    if (action === 'package-root') return open(renderPackageRoot());
    if (action === 'tune-root') return open(renderTuneRoot());
    if (action === 'system-root') return open(renderSystemRoot());
    if (action.startsWith('tune:')) return open(renderTuneList(action.split(':')[1]));
    if (action.startsWith('category:')) return open(renderCategory(action.substring(9)));

    if (action.startsWith('service:')) {
      const parts = action.split(':');
      const id = parts[1];
      let backAction = 'package-root';
      if (parts[2] === 'category') backAction = `category:${parts.slice(3).join(':')}`;
      else if (id.includes('tune-') || id.includes('addon-')) backAction = id.includes('diesel') || id.includes('purging') ? 'tune:diesel' : 'tune:bensin';
      return routeService(id, backAction);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) close();
  });

  // Semua tombol kategori di halaman utama langsung membuka DETAIL KATEGORI.
  document.querySelectorAll('[data-category-id]').forEach(button => {
    button.addEventListener('click', () => open(renderCategory(button.dataset.categoryId)));
  });

  // Kartu VG TUNE membuka popup level VG TUNE.
  document.querySelectorAll('[data-package="vg-tune"], .js-package-detail').forEach(el => {
    el.addEventListener('click', () => open(renderTuneRoot()));
  });

  // Tombol service lama tetap diarahkan ke detail baru.
  document.querySelectorAll('.js-service-detail').forEach(button => {
    button.addEventListener('click', () => routeService(button.dataset.serviceId));
  });

  // WhatsApp header/hero/floating tetap bekerja.
  document.querySelectorAll('.js-whatsapp').forEach(a => {
    a.addEventListener('click', () => {
      const raw = a.dataset.waMessage;
      if (raw) a.href = `${WA_BASE}?text=${encodeURIComponent(decodeURIComponent(raw))}`;
    });
  });

  window.VGPopup = {
    openPackage: () => open(renderPackageRoot()),
    openSystem: () => open(renderSystemRoot()),
    close
  };
})();
