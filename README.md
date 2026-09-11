# Chatvolt API Documentation

Documentação oficial da API do [Chatvolt](https://chatvolt.ai) — a plataforma no-code para criar Agentes de IA personalizados.

## Tech Stack

- [Mintlify](https://mintlify.com) — documentação
- MDX — conteúdo
- OpenAPI 3.1 — spec dos endpoints

## Rodar localmente

```bash
# Com Docker
make start

# Ou manualmente
npm i -g mintlify
mintlify dev
```

Acesse `http://localhost:3000`

## Deploy

O deploy é automático via integração Mintlify ao fazer push na branch `main`.

## Sincronização da OpenAPI Spec

O arquivo `openapi.yaml` é sincronizado automaticamente a partir do endpoint dinâmico
em `api.chatvolt.ai` através do workflow `.github/workflows/sync-openapi.yml`:

- **Diariamente** às 06:00 UTC (cron)
- **Manual** via `workflow_dispatch` no GitHub Actions
- **Ao alterar** o workflow de sync

O workflow captura a spec mais recente e faz commit automático se houver diferenças.

> **Nota:** O endpoint dinâmico gera a especificação OpenAPI 3.0.1 completa da API
> a partir do código do dashboard (`apps/dashboard/pages/api/docs/openai.yaml.ts`),
> substituindo a manutenção manual dos YAMLs estáticos.

## Estrutura

```
├── docs.json          ← configuração Mintlify
├── openapi.yaml       ← spec OpenAPI
├── pages/             ← conteúdo em MDX
│   ├── start/         ← introdução e quickstart
│   ├── agents/        ← endpoints de agentes
│   ├── conversations/ ← endpoints de conversas
│   └── ...
├── logo/              ← logotipos
└── images/            ← assets
```
