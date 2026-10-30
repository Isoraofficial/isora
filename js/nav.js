(function() {
 const script = document.currentScript;
 const d = script ? script.dataset : {};
 
 const path = location.pathname;
 const segments = path.split('/').filter(Boolean);
 const currentFile = segments[segments.length - 1] || '';
 
 const isSubPage = currentFile.endsWith('.html') && currentFile !== 'index.html';
 
 const autoBack = isSubPage ? './' : '../';
 const back = d.back || autoBack;
 
 let autoTitle;
 
 if (currentFile === '404.html') {
  autoTitle = 'Halaman Tidak Ditemukan';
 } else {
  const first = segments[0] || '';
  const titleSource = first.endsWith('.html') ? first.replace('.html', '') : first;
  
  autoTitle = titleSource ?
   titleSource.charAt(0).toUpperCase() + titleSource.slice(1).replace(/-/g, ' ') :
   'Beranda';
 }
 
 const title = d.title || autoTitle;
 
 const nav = document.createElement('nav');
 nav.innerHTML = `
  <a class="btn-back" href="${back}">
   <svg class="icon-back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 18l-6-6 6-6" />
   </svg>
  </a>
  <div class="title-nav">${title}</div>`;
 
 script.parentNode.insertBefore(nav, script);
})();