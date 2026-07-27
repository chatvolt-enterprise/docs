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
