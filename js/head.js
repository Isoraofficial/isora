document.write(`
 <link rel="icon" type="image/png" href="/favicon.svg">
 <link rel="stylesheet" href="/css/global.css">`);
 
(function() {
 const savedTheme = localStorage.getItem('theme') || 'dark';
 document.documentElement.setAttribute('data-theme', savedTheme);
 
 const savedFontSize = localStorage.getItem('user-font-size') || '100';
 document.documentElement.style.fontSize = savedFontSize + '%';
})();