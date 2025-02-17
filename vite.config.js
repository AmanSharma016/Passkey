import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to all network interfaces
    port: process.env.PORT || 5173,  // Use Render's assigned port or default to 5173
    allowedHosts: [
      'passkey-4yw1.onrender.com', // Add this host to the allowed hosts
      'localhost',
      '127.0.0.1',
    ],
  },
});
