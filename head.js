document.write(`
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,200..800;1,200..800&family=Audiowide&family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet">

<!-- CSS -->
<link rel="stylesheet" href="/asset/style.css">
<link rel="stylesheet" href="/asset/lesson.css">

<!-- KaTeX CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"><\/script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"><\/script>

<!-- JSXGraph CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css">
<script defer src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"><\/script>`);

document.addEventListener('DOMContentLoaded', function () {
 if (typeof renderMathInElement === 'function') {
  renderMathInElement(document.body, {
   delimiters: [
    { left: '$$', right: '$$', display: true },
    { left: '$',  right: '$',  display: false }],
    throwOnError: false});}
});

function buatGrafik(id, fungsi, warnaKurva) {
 if (!window.JXG) return;
 var board = JXG.JSXGraph.initBoard(id, {
   boundingbox: [-10, 10, 10, -10],
   axis: false,
   grid: false,
   showNavigation: false,
   pan: { enabled: false },
   zoom: { enabled: false }});

  board.create('grid', {
   strokeColor: '#444444',
   strokeWidth: 0.5});

  board.create('axis', [[-10, 0], [10, 0]], {
   strokeColor: '#ffffff',
   strokeWidth: 2,
   ticks: {
     strokeColor: '#ffffff',
     label: { color: '#ffffff', fontSize: 12 }},
    label: { text: 'x', color: '#ffffff', fontSize: 14 }});

  board.create('axis', [[0, -10], [0, 10]], {
   strokeColor: '#ffffff',
   strokeWidth: 2,
   ticks: {
     strokeColor: '#ffffff',
     label: { color: '#ffffff', fontSize: 12 }},
     label: { text: 'y', color: '#ffffff', fontSize: 14 }});
  board.create('functiongraph', [fungsi, -10, 10], {
   strokeColor: warnaKurva || '#4ea1ff',
   strokeWidth: 2});
  board.update();}