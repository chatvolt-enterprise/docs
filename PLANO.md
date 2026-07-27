# Plano — Documentação de API Chatvolt

> Inspirado no design da [AbacatePay Documentation](https://github.com/AbacatePay/documentation)
> 
> **Status:** 🔵 Planejamento
> **Diretório:** `/home/hiarley/Área de trabalho/chatvolt-docs/`

---

## 🎯 Objetivo

Criar uma documentação de API standalone, em português, organizada por recursos, com OpenAPI consolidada, exemplos práticos e identidade visual Chatvolt (roxo `#6132A9`).

**Escopo inicial:** API Reference apenas (feature docs continuam no `apps/docs/` existente).

---

## 📁 Estrutura do Projeto

```
chatvolt-docs/
├── docs.json                  ← Config Mintlify (cores, navegação, logo)
├── openapi.yaml               ← Spec OpenAPI unificada (todos os endpoints)
├── custom.css                 ← Customizações visuais
├── .gitignore
├── Dockerfile                 ← Dev local com Docker
├── docker-compose.yml
├── Makefile
├── README.md
├── PLANO.md                   ← Este arquivo
│
├── pages/
│   ├── start/
│   │   ├── introduction.mdx   ← Visão geral da API
│   │   └── quickstart.mdx     ← Primeira chamada em 5 minutos
│   │
│   ├── authentication.mdx     ← API keys, Bearer token, permissões
│   ├── errors.mdx             ← Códigos de erro, rate limits
│   │
│   ├── agents/                ← Agentes de IA
│   │   ├── reference.mdx
│   │   ├── query.mdx
│   │   ├── create.mdx
│   │   ├── get.mdx
│   │   ├── update.mdx
│   │   ├── delete.mdx
│   │   └── webhook.mdx
│   │
│   ├── conversations/         ← Conversas e mensagens
│   │   ├── reference.mdx
│   │   ├── send-message.mdx
│   │   ├── get-messages.mdx
│   │   ├── get-by-id.mdx
│   │   ├── delete.mdx
│   │   └── variables.mdx
│   │
│   ├── contacts/              ← Contatos
│   │   ├── reference.mdx
│   │   ├── create.mdx
│   │   ├── get.mdx
│   │   └── variables.mdx
│   │
│   ├── datastores/            ← Bases de conhecimento
│   │   ├── reference.mdx
│   │   ├── query.mdx
│   │   ├── create.mdx
│   │   ├── list.mdx
│   │   ├── get.mdx
│   │   ├── update.mdx
│   │   └── delete.mdx
│   │
│   ├── dispatches/            ← Disparos em massa
│   │   ├── reference.mdx
│   │   ├── create.mdx
│   │   ├── list.mdx
│   │   └── populate-queue.mdx
│   │
│   ├── artifacts/             ← Artefatos e mídia
│   │   ├── reference.mdx
│   │   ├── search.mdx
│   │   ├── media/
│   │   └── categories/
│   │
│   ├── whatsapp/              ← WhatsApp API
│   │   ├── reference.mdx
│   │   ├── template-message.mdx
│   │   ├── send-buttons.mdx
│   │   ├── send-lists.mdx
│   │   ├── send-cta.mdx
│   │   └── send-location.mdx
│   │
│   ├── crm/                   ← Flux CRM
│   │   ├── reference.mdx
│   │   ├── scenarios/
│   │   ├── steps/
│   │   └── conversation-logs/
│   │
│   ├── changelog/
│   │   └── index.mdx
│   │
│   └── (futuro: integrações Z-API, Zapper, Mercado Livre, Twilio...)
│
├── images/                    ← Screenshots e diagramas
├── logo/
│   ├── dark.svg
│   └── light.svg
│
└── api-reference/             ← (opcional, se usar modo híbrido)
```

---

## 🧱 Fases de Implementação

### Fase 1 — Fundação (~1h)
**Objetivo:** Projeto de pé, rodando localmente.

- [x] Criar diretório `chatvolt-docs/`
- [ ] Criar `docs.json` com:
  - Cores Chatvolt (`primary: #6132A9`, `light: #C69EFF`, `dark: #6132A9`)
  - Logo (light/dark)
  - Navegação inicial (start, authentication, errors, agents, conversations)
  - Configuração OpenAPI
- [ ] Copiar logotipos para `logo/`
- [ ] Criar `custom.css` (ajustes finos de estilo)
- [ ] Criar `Dockerfile` + `docker-compose.yml` + `Makefile` para dev local
- [ ] Criar `.gitignore`
- [ ] Verificar com `mintlify dev`

### Fase 2 — OpenAPI Consolidada (~2h)
**Objetivo:** Spec única refletindo os endpoints reais.

- [ ] Analisar as 12 specs YAML existentes em `apps/docs/openapi/`
- [ ] Consolidar em `openapi.yaml` único
  - Normalizar paths (`/agents/{id}/query` em vez de `/api/agents/{id}/query`)
  - Unificar security scheme (Bearer token)
  - Preencher `summary` e `description` consistentes
  - Adicionar tags por recurso (agents, conversations, contacts...)
- [ ] Mapear os 316 endpoints do `apps/dashboard/pages/api/` vs os ~70 documentados
- [ ] **Decisão:** documentar todos ou priorizar os 30-40 mais usados?

### Fase 3 — Páginas Essenciais (~3h)
**Objetivo:** Cobertura dos endpoints mais chamados.

- [ ] `pages/start/introduction.mdx` — o que é a API, URL base (`https://api.chatvolt.ai`)
- [ ] `pages/start/quickstart.mdx` — exemplo funcional em 5 minutos (curl + JS)
- [ ] `pages/authentication.mdx` — como criar API key, Bearer token, erros 401/403
- [ ] `pages/errors.mdx` — tabela de códigos HTTP, formato de erro, rate limits (429), dicas de retry
- [ ] `pages/agents/reference.mdx` — visão geral do recurso Agente
- [ ] `pages/agents/query.mdx` — **o endpoint mais importante** (streaming SSE + JSON)
- [ ] `pages/agents/create.mdx` + `get.mdx` + `update.mdx` + `delete.mdx`

### Fase 4 — Conversas e Contatos (~2h)
**Objetivo:** Segundo grupo de endpoints mais usado.

- [ ] `pages/conversations/reference.mdx`
- [ ] `pages/conversations/send-message.mdx`
- [ ] `pages/conversations/get-messages.mdx`
- [ ] `pages/conversations/get-by-id.mdx`
- [ ] `pages/conversations/delete.mdx`
- [ ] `pages/conversations/variables.mdx`
- [ ] `pages/contacts/reference.mdx`
- [ ] `pages/contacts/create.mdx` + `get.mdx` + `variables.mdx`

### Fase 5 — Datastores e Dispatches (~2h)
**Objetivo:** Completar recursos de conhecimento e disparo.

- [ ] `pages/datastores/reference.mdx`
- [ ] `pages/datastores/query.mdx`
- [ ] `pages/datastores/create.mdx` + `list.mdx` + `get.mdx` + `update.mdx` + `delete.mdx`
- [ ] `pages/dispatches/reference.mdx` + `create.mdx` + `list.mdx` + `populate-queue.mdx`

### Fase 6 — WhatsApp e CRM (~2h)
**Objetivo:** Canais de conversa e Flux CRM.

- [ ] `pages/whatsapp/reference.mdx`
- [ ] `pages/whatsapp/template-message.mdx` + `send-buttons.mdx` + `send-lists.mdx` + `send-cta.mdx`
- [ ] `pages/crm/reference.mdx`
- [ ] `pages/crm/scenarios/` (CRUD)
- [ ] `pages/crm/steps/` (CRUD + move + add-conversation)
- [ ] `pages/crm/conversation-logs/` (CRUD)

### Fase 7 — Finalização (~1h)
**Objetivo:** Polish e deploy.

- [ ] `pages/changelog/index.mdx`
- [ ] Revisar consistência (exemplos, formatação, links)
- [ ] Testar todos os links localmente
- [ ] Configurar deploy (Mintlify GitHub integration)

---

## 📊 Status dos Endpoints

| Recurso | Total no código | Documentado (OpenAPI) | % | Prioridade |
|---------|:-:|:-:|:-:|:-:|
| Agents | ~25 | 8 | 32% | 🔴 Crítico |
| Conversations | ~25 | 16 | 64% | 🔴 Crítico |
| Contacts | ~12 | 4 | 33% | 🔴 Crítico |
| Datastores | ~15 | 7 | 47% | 🟡 Alto |
| Dispatches | ~15 | 6 | 40% | 🟡 Alto |
| Artifacts | ~18 | 8 | 44% | 🟡 Alto |
| WhatsApp | ~20 | 9 | 45% | 🟡 Alto |
| CRM | ~20 | 7 | 35% | 🟡 Médio |
| Z-API / Zapper / ML / Twilio | ~8 | 3 | 38% | 🔵 Baixo |
| Admin / Account / Analytics | ~60 | 0 | 0% | ⚪ Interno |
| Auth / Webhooks / Well-known | ~15 | 0 | 0% | ⚪ Interno |
| Outros | ~80 | ~2 | ~2% | ⚪ Interno |
| **Total** | **~316** | **~70** | **22%** | |

**Legenda:** 🔴 Fases 3-4 | 🟡 Fases 5-6 | 🔵 Futuro | ⚪ Não público

---

## 🎨 Identidade Visual

### Cores Chatvolt (do mint.json atual)
```json
{
  "colors": {
    "primary": "#6132A9",
    "light": "#C69EFF",
    "dark": "#6132A9"
  }
}
```

### Fonte
- **Primary:** Inter (padrão Mintlify) — podemos manter
- Ou customizar se houver brand guideline específica

### Logo
- Extrair do `apps/dashboard/public/logo.png` ou pedir para o time de design
- Precisamos de versões SVG para light e dark mode

---

## ❓ Decisões Pendentes

1. **Onde hospedar?** Mintlify Cloud (integrado com GitHub) ou self-hosted?
2. **Domínio:** `docs.chatvolt.ai` já existe? (aponta para o Mintlify atual)
3. **OpenAPI:** gerar automaticamente dos tipos TypeScript ou manter manual?
4. **Escopo da Fase 1:** quantos endpoints entram no primeiro deploy? (sugiro ~30-40)
5. **Changelog:** manual ou automático a partir de tags/releases?
6. **Manter `apps/docs/` atual?** Sim, feature docs continuam lá. Essa nova doc é só API ref.

---

## 🚀 Como Rodar Localmente

```bash
# 1. Instalar Mintlify CLI
npm i -g mintlify

# 2. Navegar até o diretório
cd /home/hiarley/Área de trabalho/chatvolt-docs

# 3. Iniciar dev server
mintlify dev

# Ou com Docker:
make start
```

---

## 📝 Notas

- Baseado em: https://github.com/AbacatePay/documentation
- Tech stack: Mintlify + MDX + OpenAPI 3.1
- Idioma: Português (padrão), com possibilidade de i18n depois
- O `apps/docs/` existente **não será modificado**
