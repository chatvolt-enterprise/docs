# Plano: Documentação de API Chatvolt — Status

## Progresso

### ✅ Passo 0 — Setup Mintlify
- [x] `docs.json` configurado (cores #6132A9, navegação, OpenAPI)
- [x] `custom.css`, `Dockerfile`, `docker-compose.yml`, `Makefile`
- [x] `logo/` com logotipos (dark.png, light.png)
- [x] `favicon.png`
- [x] `.gitignore`, `README.md`
- [x] Estrutura de pastas (agents, conversations, contacts, datastores, etc.)

### ✅ Passo 1 — Mapear Endpoints Prioritários
- [x] 256 endpoints públicos identificados
- [x] 60 endpoints internos separados
- [x] ~71 endpoints Tier 1 (prioritários) definidos
- [x] Lista salva em `.ralph/endpoints-prioritarios.md`

### ✅ Passo 2 — Gerar OpenAPI Consolidada
- [x] 12 specs originais consolidadas em `openapi.yaml`
- [x] 69 paths, 115 métodos, 43 schemas
- [x] Paths normalizados (removido `/api/` prefix)
- [x] Security scheme Bearer token adicionado

### 🔄 Passo 3 — Documentar Endpoints (em andamento)
**Páginas criadas:**
- [x] `pages/start/introduction.mdx`
- [x] `pages/start/quickstart.mdx`
- [x] `pages/authentication.mdx`
- [x] `pages/errors.mdx`
- [x] `pages/agents/reference.mdx`
- [x] `pages/agents/query.mdx` (streaming SSE + JSON)
- [x] `pages/conversations/reference.mdx`

**Próximas páginas a criar:**
- [ ] `pages/agents/create.mdx`
- [ ] `pages/agents/get.mdx`
- [ ] `pages/agents/update.mdx`
- [ ] `pages/agents/delete.mdx`
- [ ] `pages/agents/webhook.mdx`
- [ ] `pages/conversations/send-message.mdx`
- [ ] `pages/conversations/get-messages.mdx`
- [ ] `pages/contacts/reference.mdx`
- [ ] `pages/datastores/reference.mdx`

### ⬜ Passo 4 — Revisão e Consistência
- [ ] Pendente

### ⬜ Passo 5 — Deploy
- [ ] Pendente
