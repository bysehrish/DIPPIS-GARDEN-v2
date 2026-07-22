import { build } from 'vite';
await build({
  logLevel: 'error',
  plugins: [{
    name: 'empty-json',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('.json') && code.trim() === '') {
        return 'export default {}';
      }
    }
  }],
  build: {
    rollupOptions: {
      input: 'empty.json'
    }
  }
});
