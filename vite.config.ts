import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/',
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
    allowedHosts: [
      'angelesrebeldes.com',
      'www.angelesrebeldes.com',
    ]
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    allowedHosts: [
      'angelesrebeldes.com',
      'www.angelesrebeldes.com',
    ]
  }
})
