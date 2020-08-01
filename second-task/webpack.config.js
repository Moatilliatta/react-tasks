module.exports = (env) => 
	env === 'PROD'
		? require('./webpack.config.prod.js')
		: require('./webpack.config.dev.js')