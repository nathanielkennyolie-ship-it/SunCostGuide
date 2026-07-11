// Stub — injects brand context into prompts
// Reads docs/brand-guidelines.md and outputs JSON
const fs = require('fs');
const path = require('path');

const brandFile = path.resolve(__dirname, '../../../docs/brand-guidelines.md');
try {
  const content = fs.readFileSync(brandFile, 'utf-8');
  console.log(JSON.stringify({ brand: content, status: 'ok' }));
} catch {
  console.log(JSON.stringify({ brand: null, status: 'no-guidelines-file' }));
}
