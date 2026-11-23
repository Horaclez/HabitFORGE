// Copia lucide y las fuentes desde node_modules a www/vendor para que la app funcione 100 % offline.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), v = path.join(root, 'www', 'vendor');
fs.mkdirSync(v, { recursive: true });
const nm = p => path.join(root, 'node_modules', p);
function cp(a, b) { try { fs.copyFileSync(a, b); return true } catch (e) { console.warn('No encontrado:', a); return false } }
cp(nm('lucide/dist/umd/lucide.min.js'), path.join(v, 'lucide.min.js'));
const F = [['outfit', 'Outfit', [500, 700, 800]], ['plus-jakarta-sans', 'Plus Jakarta Sans', [400, 600, 800]], ['jetbrains-mono', 'JetBrains Mono', [500, 700]]];
let css = '';
for (const [p, n, ws] of F) for (const w of ws) {
  const f = `${p}-latin-${w}-normal.woff2`;
  if (cp(nm(`@fontsource/${p}/files/${f}`), path.join(v, f)))
    css += `@font-face{font-family:'${n}';font-weight:${w};font-style:normal;font-display:swap;src:url(${f}) format('woff2')}\n`;
}
fs.writeFileSync(path.join(v, 'fonts.css'), css);
console.log('Recursos offline listos en www/vendor');
