const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'svgl');
const files = fs.readdirSync(dir);
files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const match = content.match(/viewBox=["']([^"']+)["']/);
  const tagMatch = content.match(/<svg([^>]+)>/);
  console.log(f.padEnd(18), 'viewBox:', (match ? match[1] : 'NONE').padEnd(20), 'chars:', content.length);
});
