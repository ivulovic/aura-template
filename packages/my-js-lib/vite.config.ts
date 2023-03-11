import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import replace from 'rollup-plugin-replace';

export default defineConfig({
    plugins: [
        react({
            // jsxRuntime: "classic",
        }),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/main.tsx'),
            // entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: 'MyLib',
            formats: ['umd'],
            fileName: (format) => `my-lib.${format}.js`,
        },
        rollupOptions: {
            // external: ['react', 'react-dom'],
            // output: {
            //     globals: {
            //         react: 'React',
            //         'react-dom': 'ReactDOM'
            //     },
            // },
            plugins: [
                replace({
                    'process.env.NODE_ENV': JSON.stringify( 'production' )
                })
            ],
            output:{
                inlineDynamicImports: true
            }
        },
    },
});
