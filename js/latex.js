document.write(`
 <!-- KaTeX -->
 <link rel="stylesheet" href="/assets/latex/katex.min.css">
 <script defer src="/assets/latex/katex.min.js"><\/script>
 
 <!-- mhchem -->
 <script defer src="/assets/latex/contrib/mhchem.min.js"><\/script> 

 <!-- Copy -->
 <script defer src="/assets/latex/contrib/copy-tex.min.js"><\/script>
 
 <!-- Auto Render KaTeX -->
 <script defer src="/assets/latex/contrib/auto-render.min.js"><\/script>

 <!-- Auto Render -->
 <script>
  document.addEventListener('DOMContentLoaded', function() {
   renderMathInElement(document.body, {
    delimiters: [
     { left: '$$', right: '$$', display: true },
     { left: '$', right: '$', display: false }
    ],
    throwOnError: false
   });
  });
 <\/script>`);