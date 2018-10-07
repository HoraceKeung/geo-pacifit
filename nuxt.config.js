import path from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'

class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-Za-z0-9-_:\/]+/g) || []
	}
}

module.exports = {
	mode: 'spa',
	head: {
		title: 'Geo Pacifit',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'The most reliable metal supplier in the world' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: (process.env.DEPLOY_ENV === 'GH_PAGES' ? '/geo-pacifit' : '') + '/favicon.ico'}
		]
	},
	loading: false,
	build: {
		extractCSS: true,
		// Run ESLint on save
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			// Cleanup CSS with PurgeCSS
			if (!isDev) {
				config.plugins.push(
					new PurgecssPlugin({
						paths: glob.sync([
							path.join(__dirname, './pages/**/*.vue'),
							path.join(__dirname, './layouts/**/*.vue'),
							path.join(__dirname, './components/**/*.vue')
						]),
						extractors: [{
							extractor: TailwindExtractor,
							extensions: ['vue']
						}],
						whitelist: ['html', 'body', 'nuxt-progress', 'vue-back-to-top']
					})
				)
			}
		}
	},
	css: ['@/assets/css/global.css'],
	plugins: ['~/plugins/main.js'],
	router: {
		base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/geo-pacifit/' : ''
	},
	env: {
		baseImgUrl: process.env.DEPLOY_ENV === 'GH_PAGES' ? 'https://horacekeung.github.io/geo-pacifit/img/' : '/img/'
	}
}
