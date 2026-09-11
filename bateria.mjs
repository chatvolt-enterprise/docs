// Bateria de teste: verifica se toda página segue o padrão obrigatório
//  1. openapi: frontmatter válido (gera Authorizations + Playground no Mintlify)
//  2. curl completo (exemplo completo, sem versão mínima)
//  3. dicas (seção de boas práticas)
// Uso: node bateria.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'pages';
const IGNORE = new Set(['start/introduction.mdx', 'start/quickstart.mdx', 'authentication.mdx', 'errors.mdx', 'changelog/index.mdx']);

function walk(dir) {
  return readdirSync(dir).flatMap((e) => {
    const p = join(dir, e);
    return statSync(p).isDirectory() ? walk(p) : p;
  });
}

// extrai frontmatter: { title, openapi }
function frontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.+)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^['"]|['"]$/g, '');
  }
  return fm;
}

// métodos HTTP suportados no openapi.yaml (parsing linha a linha)
function loadSpec() {
  const yaml = readFileSync('openapi.yaml', 'utf8');
  const specs = new Set();
  let path = null;
  for (const line of yaml.slice(yaml.indexOf('paths:')).split('\n')) {
    const pm = line.match(/^  \/(\S.*):$/);
    if (pm) { path = pm[1]; continue; }
    const mm = line.match(/^    (get|post|put|patch|delete):$/);
    if (mm && path) specs.add(`${mm[1].toUpperCase()} /${path}`);
  }
  return specs;
}

const specs = loadSpec();

function hasFence(src, lang) {
  return src.match(new RegExp('```' + lang + '\\n[\\s\\S]*?```')) !== null;
}

const pages = walk(ROOT).filter((p) => p.endsWith('.mdx')).sort();

const results = { ok: 0, api: 0 };
const report = [];

for (const p of pages) {
  const name = p.replace('pages/', '');
  const src = readFileSync(p, 'utf8');
  const fm = frontmatter(src);
  const base = src.replace(/^---\n[\s\S]*?\n---\n/, '');

  const isApi = !IGNORE.has(name) && !name.endsWith('reference.mdx');

  // openapi é válido? (lista multi-endpoint = Mintlify não renderiza)
  let o;
  if (!fm.openapi) o = '✗';
  else if (fm.openapi.includes(',')) o = '✗ lista';
  else o = specs.has(fm.openapi) ? '✓' : '✗ inválido';

  const ck = {
    openapi: o,
    curl: hasFence(base, 'bash') && /\bcurl\b/.test(base) ? '✓' : '✗',
    dicas: /\bDicas\b/.test(base) ? '✓' : '✗',
  };

  if (isApi) {
    results.api++;
    if (Object.values(ck).every((v) => v === '✓')) results.ok++;
    report.push(`${ck.openapi} ${ck.curl} ${ck.dicas}  ${name}`);
  }
}

report.sort();
console.log(report.join('\n'));
const total = results.api;
console.log(`\n${results.ok}/${total} páginas de API 100% no padrão (${IGNORE.size} não-API + ${pages.length - total - IGNORE.size} reference ignoradas)`);

// resumo por item
const miss = { openapi: 0, curl: 0, dicas: 0 };
for (const p of pages) {
  const name = p.replace('pages/', '');
  if (IGNORE.has(name) || name.endsWith('reference.mdx')) continue;
  const src = readFileSync(p, 'utf8');
  const fm = frontmatter(src);
  const base = src.replace(/^---\n[\s\S]*?\n---\n/, '');
  if (!(fm.openapi && specs.has(fm.openapi))) miss.openapi++;
  if (!(hasFence(base, 'bash') && /\bcurl\b/.test(base))) miss.curl++;
  if (!/\bDicas\b/.test(base)) miss.dicas++;
}
console.log(`faltando: openapi=${miss.openapi} curl-completo=${miss.curl} dicas=${miss.dicas}`);