module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,jpg,png,html,json}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'dist/service-worker.js'
};