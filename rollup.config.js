import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

const plugins = [
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
    uglify()
]

export default {
    input: 'lib/index.js',
    output: {
        file: 'dist/vtt.js',
        exports: 'default',
        format: 'cjs',
        sourcemap: true,
    },
    plugins
};
