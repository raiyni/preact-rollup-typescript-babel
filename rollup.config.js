import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload'
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve'

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const name = 'Timeline';

export default {
  input: './src/index.tsx',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en/#external
  external: [],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      babelHelpers: 'bundled',
      include: ['src/**/*'],
    }),
    serve({
      contentBase: ['public', 'dist']
    }),
    livereload()
  ],

  output: [{
    dir: 'dist',
    format: 'iife',
    name,

    // https://rollupjs.org/guide/en/#outputglobals
    globals: {},
  }],
};