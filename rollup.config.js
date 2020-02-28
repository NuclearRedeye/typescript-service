import { terser } from 'rollup-plugin-terser';
module.exports = [
  {
    input: 'build/index.js',
    output: {
      file: 'dist/bin/typescript-service.js',
    },
  },
  {
    input: 'build/index.js',
    output: {
      file: 'dist/bin/typescript-service.min.js',
    },
    plugins: [terser()],
  },
];
