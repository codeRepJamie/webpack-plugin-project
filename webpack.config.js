import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';

// 手动定义 __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },
    mode: 'development',
};