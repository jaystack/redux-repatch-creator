import path from 'path';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: path.join('src', 'index.ts'),
  plugins: [
    typescript()
  ],
  sourcemap: true,
  output: {
    exports: 'named',
    file: 'dist/redux-repatch-creator.js',
    name: 'ReduxRepatchCreator',
    format: 'umd'
  }
}
