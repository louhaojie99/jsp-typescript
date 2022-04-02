// 引入一个包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 引入代码压缩插件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

// webpack中所有的配置信息都应该写在module.exports中
module.exports = {
	// 指定入口文件
	entry: './src/view/main.ts',
	// 指定打包文件所在的目录
	output: {
		// 指定打包文件的目录
		path: path.resolve(__dirname, 'dist'),
		// 打包后文件的文件
		filename: 'bundle.js',
		// 告诉webpack不使用箭头函数
		environment: {
			arrowFunction: false,
		},
	},
	// 指定webpack打包时要使用的模块
	module: {
		// 指定加载的规则
		rules: [
			{
				// test指定的是规则生效的文件
				test: /\.ts$/,
				// 要使用的loader
				use: [
					// 配置babel
					{
						// 指定加载器
						loader: 'babel-loader',
						// 设置babel
						options: {
							// 设置预定义的环境
							presets: [
								[
									// 指定环境插件
									'@babel/preset-env',
									// 配置信息
									{
										// 要兼容的目标浏览器
										targets: {
											chrome: '90',
										},
										// 只当corejs版本
										corejs: '3',
										// 使用corejs的方式			usage表示按需加载
										useBuiltIns: 'usage',
									},
								],
							],
						},
					},
					'ts-loader',
				],
				// 要排除的文件
				exclude: /node_modules/,
			},
			// 设置less文件的处理
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					/* 引入postcss */
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env',
										{
											browsers: 'last 2 versions ',
										},
									],
								],
							},
						},
					},
					'less-loader',
				],
			},
		],
	},
	plugins: [
		/* 自动生成html文件,引入相关的资源 */
		new HTMLWebpackPlugin({
			template: './src/view/home.html', // 生成模板
			minify: {
				// 移除空格
				collapseWhitespace: true,
				// 移除注释
				removeComments: true,
			},
		}),
		/* 打包清除dist目录, 保证打包代码最新 */
		new CleanWebpackPlugin(),
		new UglifyjsWebpackPlugin(),
	],
	mode: 'production', // development为开发者环境，production为生产环境变量 ，还有一个为none
	// 用来设置引用模块
	resolve: {
		extensions: ['.ts', '.js'],
	},
}
