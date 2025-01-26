# SvelteKit starter

A Svelte-based web application boilerplate.

## Technologies

- [SvelteKit](https://kit.svelte.dev/)
- [Bun](https://bun.sh/) - JavaScript runtime & package manager
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Biome](https://biomejs.dev/) - Linter & formatter
- [DaisyUI](https://daisyui.com/) - Component library
## Getting Started

1. Copy the environment example file:
```bash
cp .env.example .env
```

2. Edit .env file:
- For local development: Set `VITE_POCKETBASE_URL` to your local PocketBase instance
- For production: Set `VITE_POCKETBASE_REMOTE_URL` to your remote PocketBase URL

3. Install dependencies:
```bash 
bun install
```

### Development
- Start the development server: `bun run dev`
- or open in a new browser tab: `bun run dev -- --open`

### Building

Create a production build:
`bun run build`


Preview the production build:
`bun run preview`

> Note: You may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
