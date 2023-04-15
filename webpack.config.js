import webpack from 'webpack'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const outputDir = dirname(fileURLToPath(import.meta.url));

export default {
  entry: './index',
  output: {
    filename: 'squaretext.min.js',
    path: join(outputDir, 'dist'),
    sourceMapFilename: '[file].map',
    library: 'squaretext',  // module name in global scope
    libraryTarget: 'umd'
  },

  mode: 'development'
}
