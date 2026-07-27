# Endpoints Prioritários — Chatvolt API

> Total de endpoints públicos: **256**
> 
> Gerado em: Ralph Loop — Passo 1

---

## Tier 1 — Core API (documentar primeiro)

### Agentes (20 endpoints)
| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/agents` | GET | Listar agentes |
| `/agents/{id}` | GET | Obter agente |
| `/agents/{id}` | PATCH | Atualizar agente |
| `/agents/{id}` | DELETE | Deletar agente |
| `/agents/create` | POST | Criar agente |
| `/agents/{id}/query` | POST | **Enviar query (streaming SSE)** 🔥 |
| `/agents/{id}/simplequery` | POST | Query simples |
| `/agents/{id}/webhook` | POST | Webhook do agente |
| `/agents/{id}/clone` | POST | Clonar agente |
| `/agents/{id}/public` | GET | Dados públicos do agente |
| `/agents/{id}/tools` | GET | Listar tools do agente |
| `/agents/{id}/tools/{toolId}` | GET/PATCH/DELETE | CRUD tool |
| `/agents/{id}/tags` | GET/POST | Tags do agente |
| `/agents/{id}/capture` | POST | Captura de lead |
| `/agents/{id}/quick-messages` | GET | Mensagens rápidas |
| `/agents/{id}/generate-upload-link` | POST | Link de upload |
| `/agents/{id}/tool-config` | GET | Config de tools |
| `/agents/{id}/crm-config` | GET/POST | Config CRM |
| `/agents/models` | GET | Modelos disponíveis |
| `/agents/query` | POST | Query sem agente específico |

### Conversas (31 endpoints)
| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/conversations` | GET | Listar conversas |
| `/conversations/{id}` | GET | Obter conversa |
| `/conversations/{id}` | DELETE | Deletar conversa |
| `/conversation/{id}/messages/{count}` | GET | **Listar mensagens** 🔥 |
| `/conversation/message/{type}/{value}` | POST | **Enviar mensagem por canal** 🔥 |
| `/conversations/{id}/assign` | POST | Atribuir conversa |
| `/conversations/{id}/unassign` | POST | Desatribuir |
| `/conversations/{id}/set-ai-enabled` | POST | Ativar/desativar AI |
| `/conversations/{id}/set-priority` | POST | Definir prioridade |
| `/conversations/{id}/set-status` | POST | Definir status |
| `/conversations/{id}/message-register` | POST | Registrar mensagem externa |
| `/conversations/{id}/notes` | GET/POST | Notas da conversa |
| `/conversations/{id}/notes/{noteId}` | PATCH/DELETE | CRUD nota |
| `/conversations/{id}/variables` | GET | Variáveis da conversa |
| `/variables/{id}/{varName}` | GET/PUT/DELETE | CRUD variável |
| `/conversation-event-log` | GET | Logs de eventos |
| `/conversations/dislike` | POST | Feedback negativo |

### Contatos (12 endpoints)
| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/contacts` | GET | **Listar contatos** 🔥 |
| `/contacts` | POST | **Criar contato** 🔥 |
| `/contacts/{id}` | GET | Obter contato |
| `/contacts/{id}` | PATCH | Atualizar contato |
| `/contacts/{id}` | DELETE | Deletar contato |
| `/contacts/variables` | GET | Variáveis de contato |
| `/contacts/available-variables` | GET | Variáveis disponíveis |
| `/contacts/batch-create` | POST | Criar em lote |
| `/contacts/batch-delete` | POST | Deletar em lote |
| `/contacts/export` | GET | Exportar contatos |
| `/contacts/import-csv` | POST | Importar CSV |
| `/contacts/merge` | POST | Mesclar contatos |
| `/contacts/ctwa-ads` | GET | CTWA Ads |

### Datastores (8 endpoints)
| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/datastores` | GET | Listar datastores |
| `/datastores` | POST | **Criar datastore** 🔥 |
| `/datastores/list` | GET | Lista detalhada |
| `/datastores/{id}` | GET | Obter datastore |
| `/datastores/{id}` | PATCH | Atualizar |
| `/datastores/{id}` | DELETE | Deletar |
| `/datastores/{id}/query` | POST | **Consultar knowledge base** 🔥 |
| `/datastores/{id}/upsert` | POST | Upsert de dados |

---

## Tier 2 — Alto (segunda leva)

### Dispatches (11 endpoints)
| Endpoint | Descrição |
|----------|-----------|
| `/dispatches` | Listar disparos |
| `/dispatches` | POST | Criar disparo |
| `/dispatches/{id}` | GET | Obter |
| `/dispatches/{id}` | DELETE | Deletar |
| `/dispatches/{id}/populate-queue` | POST | Popular fila |
| `/dispatches/contacts` | GET/POST | Contatos do disparo |
| `/dispatches/contacts/lists` | GET/POST/PUT/DELETE | Listas de contatos |
| `/dispatches/contacts/link` | GET/POST/DELETE | Link de contato |

### Artifacts (12 endpoints)
| Endpoint | Descrição |
|----------|-----------|
| `/artifacts` | GET/POST | Listar/criar |
| `/artifacts/{id}` | GET/PATCH/DELETE | CRUD |
| `/artifacts/search` | POST | Buscar artefatos |
| `/artifacts/media` | GET/POST | Listar/upload mídia |
| `/artifacts/media/{id}` | PATCH/DELETE | CRUD mídia |
| `/artifact-categories` | GET/POST | Categorias |
| `/artifact-categories/{id}` | GET/PATCH/DELETE | CRUD categoria |

### WhatsApp (6 endpoints)
| Endpoint | Descrição |
|----------|-----------|
| `/whatsapp/templates` | GET | Listar templates |
| `/whatsapp/{phoneNumberId}/template-message` | POST | Enviar template |
| `/messages/interactive/send-buttons` | POST | Botões interativos |
| `/messages/interactive/send-lists` | POST | Listas |
| `/messages/interactive/send-cta` | POST | CTA |
| `/messages/interactive/send-location` | POST | Localização |

### CRM (19 endpoints)
| Endpoint | Descrição |
|----------|-----------|
| `/crm/scenario` | GET/POST | CRUD cenários |
| `/crm/step` | GET/POST | CRUD steps |
| `/crm/step/move` | POST | Mover step |
| `/crm/conversationLog` | GET/POST | Logs de conversa |
| `/crm/conversation` | GET/POST | Conversas do CRM |

---

## Tier 3 — Médio (futuro)

### Integrações
- Z-API, Zapper, Mercado Livre, Twilio
- Forms
- Tools
- OAuth
- Webhooks

### Utilitários
- Tags
- Variables
- Analytics
- Events

---

## Tier 4 — Baixo (quando sobrar tempo)

- Upload links
- Audio conversion
- Banner
- Affiliates
- Onboarding
- OpenAI plugin
- Sandbox
- Sitemap
- Etc.

---

## Meta: Primeira Versão

| Tier | Endpoints | Estimativa |
|:----:|:---------:|:----------:|
| 1 — Core | ~71 | 8h |
| 2 — Alto | ~48 | 5h |
| 3 — Médio | ~60 | 6h |
| 4 — Baixo | ~77 | 6h |
| **Total** | **256** | **~25h** |

**Foco da primeira versão:** Tier 1 (~71 endpoints, ~8h de documentação)
