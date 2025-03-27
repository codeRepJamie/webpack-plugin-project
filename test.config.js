import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';
import FileListPlugin from "./src/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use the plugin in your webpack configuration:
export default {
  entry: './src/test.js',
  output: {
    filename: 'bundle2.js',
    path: resolve(__dirname, 'dist'),
  },

  plugins: [
    // Adding the plugin with the default options
    new FileListPlugin(),
  ],
};