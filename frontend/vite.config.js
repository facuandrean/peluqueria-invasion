// import { defineConfig } from 'vite';
// import { createHtmlPlugin } from 'vite-plugin-html';

// export default defineConfig({
//   build: {
//     outDir: 'dist', // Directorio de salida
//     rollupOptions: {
//       input: {
//         main: 'index.html',
//         login: 'login.html', // Añade cualquier otro archivo HTML aquí
//       },
//     },
//   },
//   plugins: [
//     createHtmlPlugin({
//       minify: true,
//     }),
//   ]
// });

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html')
      }
    }
  }
});
