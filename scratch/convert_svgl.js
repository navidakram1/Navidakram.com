const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'svgl');

function svgToJsx(svgStr, name) {
  // extract viewBox
  const vbMatch = svgStr.match(/viewBox=["']([^"']+)["']/);
  const viewBox = vbMatch ? vbMatch[1] : '0 0 24 24';

  // extract inner content between <svg...> and </svg>
  const innerMatch = svgStr.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  if (!innerMatch) return null;
  let inner = innerMatch[1];

  // remove xml comments and doctypes
  inner = inner.replace(/<!--[\s\S]*?-->/g, '');
  inner = inner.replace(/<\?xml[\s\S]*?\?>/g, '');

  // convert html/svg attribute names to camelCase for JSX
  const attrMap = {
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'xlink:href': 'xlinkHref',
    'xmlns:xlink': 'xmlnsXlink',
    'clip-path': 'clipPath',
    'xml:space': 'xmlSpace',
    'fill-opacity': 'fillOpacity',
    'stroke-opacity': 'strokeOpacity',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'color-interpolation-filters': 'colorInterpolationFilters'
  };

  for (const [k, v] of Object.entries(attrMap)) {
    const reg = new RegExp(k + '=', 'g');
    inner = inner.replace(reg, v + '=');
  }

  // convert style string like style="fill:#fff;" to style={{ fill: '#fff' }}
  inner = inner.replace(/style="([^"]+)"/g, (match, p1) => {
    const rules = p1.split(';').filter(r => r.trim());
    const obj = {};
    rules.forEach(r => {
      const parts = r.split(':');
      if (parts.length >= 2) {
        const prop = parts[0].trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        obj[prop] = parts.slice(1).join(':').trim();
      }
    });
    return 'style={' + JSON.stringify(obj) + '}';
  });

  return { viewBox, inner: inner.trim() };
}

const files = fs.readdirSync(dir);
const result = {};
files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const key = f.replace('.svg', '');
  result[key] = svgToJsx(content, key);
  console.log(key.padEnd(16), 'viewBox:', result[key] ? result[key].viewBox : 'FAILED');
});

fs.writeFileSync(path.join(__dirname, 'parsed_svgl.json'), JSON.stringify(result, null, 2));
console.log('Saved parsed SVGL components to scratch/parsed_svgl.json');
