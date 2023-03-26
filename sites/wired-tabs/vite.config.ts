import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://api.bitfinex.com/v1',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
            '/pub': {
                target: 'https://api-pub.bitfinex.com/v2',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/pub/, ''),
            },
        }
    }
});
