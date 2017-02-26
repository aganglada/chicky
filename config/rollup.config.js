import babel from 'rollup-plugin-babel';

export default {
  	entry: 'src/index.js',
  	dest: 'dist/index.js',
	format: 'iife',
	sourceMap: 'inline',
  	plugins: [
		babel({
			exclude: 'node_modules/**',
			presets: 'es2015-rollup'
		})
  	]
}