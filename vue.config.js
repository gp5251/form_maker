const path = require('path')
const {BundleAnalyzerPlugin}= require('webpack-bundle-analyzer');

module.exports = {
	chainWebpack: config => {
		config.resolve.alias
			.set('@utils', path.resolve('src/utils'))
			.set('@mixin', path.resolve('src/mixin'))
			.set('@components', path.resolve('src/components'))
			.set('@commonComponents', path.resolve('src/components_common'))
			.set('@pages', path.resolve('src/pages'))
			.set('@store', path.resolve('src/store'))
			.set('@services', path.resolve('src/service'))

		if (process.env.NODE_ENV === 'build' && process.env.VUE_BundleReport) {
			config
				.plugin('bundleReport')
				.use(BundleAnalyzerPlugin);
		}
	},
	css: {
		loaderOptions: { // 向 CSS 相关的 loader 传递选项
			less: {
				javascriptEnabled: true
			}
		}
	}
}