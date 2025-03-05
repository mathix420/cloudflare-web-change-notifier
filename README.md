# Cloudflare Web Change Notifier

Look at the [nitro quick start](https://nitro.unjs.io/guide#quick-start) to learn more how to get started.

## Setup

### Environment variables

See `.env.example` for the required environment variables.

### Deploy

```bash
bun run build
bunx wrangler secret bulk .env
bunx wrangler deploy
```

### Cloudflare Config

Go to the newly created worker in the Cloudflare dashboard and a KV binding with the name `KV`.