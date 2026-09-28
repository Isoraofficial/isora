(function(global) {
 "use strict";
 function esc(s) {
  return String(s)
   .replace(/&/g, "&amp;")
   .replace(/</g, "&lt;")
   .replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;");}
 
 function defaultHref(bab, topik) {
  return `${bab.path}/${topik.url}.html`;}
 
 function renderBab(bab, index, hrefFn) {
 var id = "acc-" + (index + 1);
 
 var topikHtml = bab.topik.map(function(t) {
  var link = esc(hrefFn(bab, t));
  var desc = t.desc ? `<span class="topic-desc"> (${esc(t.desc)})</span>` : "";
  return `<li><a class="topic-title" href="${link}">${esc(t.judul)}</a>${desc}</li>`;
 }).join("");
 
 return `
  <div class="acc-item">
   <button class="acc-header" aria-expanded="false" aria-controls="${id}">
    <span class="acc-num">${index + 1}</span>
    <span class="acc-title">${esc(bab.judul)}</span>
    <span class="acc-count">${bab.topik.length} topik</span>
    <span class="acc-icon" aria-hidden="true">›</span>
   </button>
   <div class="acc-content" id="${id}" role="region">
    <div class="acc-inner">
     <ol class="acc-list">${topikHtml}</ol>
    </div>
   </div>
  </div>`;}
 
 function init(materi, options) {
  options = options || {};
  var selector = options.selector || ".acc-index";
  var hrefFn = options.href || defaultHref;
  
  var root = document.querySelector(selector);
  if (!root) return;
  
  root.innerHTML = materi.map(function(bab, i) {
   return renderBab(bab, i, hrefFn);
  }).join("");
  
  if (!global.__accIndexBound) {
   document.addEventListener("click", function(e) {
    var header = e.target.closest(".acc-header");
    if (!header) return;
    
    var item = header.closest(".acc-item");
    if (!item) return;
    
    var isOpen = item.classList.contains("open");
    item.classList.toggle("open", !isOpen);
    header.setAttribute("aria-expanded", String(!isOpen));
   });
   global.__accIndexBound = true;
  }
 }
 
 global.AccIndex = { init: init };
})(window);