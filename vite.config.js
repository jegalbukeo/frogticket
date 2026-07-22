import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

export default defineConfig({
  base: '/frogticket/',
  server: {
    host: '0.0.0.0',
    https: {
      key: readFileSync('./certs/local-key.pem'),
      cert: readFileSync('./certs/local-cert.pem'),
    },
  },
});
