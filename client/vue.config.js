// https://cli.vuejs.org/guide/css.html#automatic-imports

const path = require('path');
// const port = process.env.PORT;

module.exports = {
	// devServer: {
	// 	proxy: {
	// 		'/api': {
	// 			// target: path.resolve(__dirname, '../server/public') || 'http://localhost:5000'
	// 			target: 'http://localhost:5000'
	// 		}
	// 	}
	// },
	outputDir: path.resolve(__dirname, '../server/public'),
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
				path.resolve(__dirname, './src/styles/styles.scss'),
			]
    }
  }
}