import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

const pathResolve = (dir: string): string => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const PORT: number = parseInt(env.VITE_PORT as string) || 5000;

  return {
    plugins: [react()],
    server: { port: PORT },
    resolve: {
      alias: {
        '@features': pathResolve('src/features'),
        '@ui': pathResolve('src/ui'),
        '@styles': pathResolve('src/styles'),
        '@app': pathResolve('src'),
      },
    },
  };
});
