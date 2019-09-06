import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

export default {
  input: 'src/index.js',
  output: [{
    dir: 'lib/cjs',
    entryFileNames: '[name].js',
    format: 'cjs',
    sourcemap: true
  }, {
    dir: 'lib/esm',
    entryFileNames: '[name].js',
    format: 'esm',
    sourcemap: true
  }],
  external: id => !id.startsWith('.'),
  plugins: [
    resolve(),
    url({
      sourceDir: 'src',
      include: ['src/**/*.png'],
      emitFiles: false,
      limit: 1024 * 1024
    }),
    babel({
      include: 'src/**/*',
      runtimeHelpers: true,
      sourceMaps: true
    }),
    postcss({
      inject: false,
      extract: true,
      sourceMap: true
    })
  ]
};
