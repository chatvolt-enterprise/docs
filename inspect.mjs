// extrai contrato (query params, body fields, required) dos endpoints sinalizados no review
import { readFileSync } from 'node:fs';
const fs = { readFileSync };
const y = fs.readFileSync('openapi.yaml', 'utf8');
const lines = y.split('\n');

function opInfo(path, method) {
  const start = lines.findIndex((l) => l === `  ${path}:`);
  if (start < 0) return { error: 'PATH NAO EXISTE' };
  const after = lines.slice(start + 1);
  const mIdx = after.findIndex((l) => l === `    ${method}:`);
  if (mIdx < 0) return { error: `METODO ${method} NAO EXISTE` };
  const op = after.slice(mIdx + 1);
  const endIdx = op.findIndex((l) => /^    (get|post|put|patch|delete):$/.test(l) || /^  \//.test(l));
  const block = op.slice(0, endIdx < 0 ? op.length : endIdx);

  const query = [];
  const params = [];
  const required = [];
  let inQuery = false, inParams = false;
  for (const l of block) {
    const inQ = l.match(/^      - in: (\S+)$/);
    if (inQ) {
      inQuery = inQ[1] === 'query';
      inParams = inQ[1] === 'query' || inQ[1] === 'path';
      continue;
    }
    const name = l.match(/^        name: (\S+)$/);
    if (name) {
      if (inQuery) query.push(name[1]);
      if (inParams) params.push(name[1]);
      continue;
    }
    if (l.trim() === 'required:') {
      let i = block.indexOf(l);
      for (let j = i + 1; j < block.length && /^\s+- \S+/.test(block[j]); j++) required.push(block[j].trim().slice(2));
    }
    if (/^      required:/.test(l)) { /* inline */ }
  }
  const isReq = (b) => !!(b || '').match(/required: true/);
  return { path, method, query, params, required };
}

const targets = [
  ['/agent-blacklist', 'post'],
  ['/agent-whitelist-whatsapp', 'post'],
  ['/agent-whitelist-whatsapp/{id}', 'delete'],
  ['/conversations/{conversationId}/assign', 'post'],
  ['/conversations/{conversationId}/set-ai-enabled', 'post'],
  ['/conversations/{conversationId}/set-priority', 'post'],
  ['/conversations/{conversationId}/set-status', 'post'],
  ['/conversations/{conversationId}/update-status', 'post'],
  ['/crm/conversationLog', 'post'],
  ['/crm/conversationLog/{logId}', 'put'],
  ['/crm/step', 'post'],
  ['/crm/step/move', 'post'],
  ['/artifacts/media/upload', 'post'],
  ['/artifacts/media', 'get'],
  ['/artifacts/media/{id}', 'patch'],
  ['/mercadolivre/get-products', 'get'],
  ['/whatsapp/templates', 'get'],
  ['/whatsapp/templates', 'post'],
  ['/messages/interactive/location-request', 'post'],
  ['/messages/interactive/send-contact', 'post'],
];
for (const [p, m] of targets) {
  const o = opInfo(p, m);
  if (o.error) { console.log(p, m, '=>', o.error); continue; }
  console.log(`== ${p} ${m}\n  query: ${o.query.join(', ')}\n  params(path): ${o.params.join(', ')}\n  required: ${o.required.join(', ') || '(none)'}`);
}