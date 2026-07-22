import { build } from 'vite';
await build({
  logLevel: 'error',
  build: {
    rollupOptions: {
      input: 'empty.json'
    }
  }
});
