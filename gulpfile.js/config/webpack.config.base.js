var webpack = require('webpack');
var path = require('path');
var config = require('../task.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//ExtractTextPlugin: 分割提取js中加载的css代码打包到单独的css文件中。如果不用此插件css样式会通过js（加载完成后）添加<stylte>的方式加载。


module.exports = function() {
    return {
        context: path.resolve(curPath),
        entry: {
            main:'./src/app.js' ,
            // vendor: 'jquery'
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(curPath, config.dist, config.javascript.dist)
        },

        plugins: [

        ],
        // 关于模块配置
        module: {
            // 模块规则（配置 loader、解析器等选项）
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                        "css-loader",
                        "resolve-url-loader",
                        'sass-loader'
                        ]
                    }),
                    include: [
                        path.resolve(__dirname, '../../src')
                    ],
                    exclude: [

                    ],
                },{
                    test:/\.css$/,
                    use: [
                        "css-loader",
                        "resolve-url-loader",
                    ]
                },
                {
                    test: /\.js$/,
                    include: [
                       
                    ],
                    exclude: [
                       '/(node_modules|bower_components)/', 
                    ],
                    // 条件导入
                    // issuer: {test, include, exclude},

                    loader: 'babel-loader',

                    options: {
                        presets: ['es2015'],
                        plugins: ['transform-runtime']
                    },
                },

                {
                    test: /\.html$/,
                    // 应用多个 loader 和选项
                    use: [
                        'htmllint-loader',
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: true,
                                removeComments: false,
                                collapseWhitespace: false,
                                //root: 

                            }
                        }
                    ]
                }
            ]
        },
        // 解析模块请求的选项
        resolve: {
            // 用于查找模块的目录
            modules: config.javascript.moudles,
            extensions: config.javascript.extensions,
            // 模块别名列表
            // alias: config.javascript.alias.push(path.resolve(curPath, 'node_modules'))
        },

        /*devtool: "source-map", // enum
        devtool: "inline-source-map", // 嵌入到源文件中
        devtool: "eval-source-map", // 将 SourceMap 嵌入到每个模块中
        devtool: "hidden-source-map", // SourceMap 不在源文件中引用
        devtool: "cheap-source-map", // 没有模块映射(module mappings)的 SourceMap 低级变体(cheap-variant)
        devtool: "cheap-module-source-map", // 有模块映射(module mappings)的 SourceMap 低级变体*/
        devtool: "eval", // 没有模块映射，而是命名模块。以牺牲细节达到最快。
        // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
        // 牺牲了构建速度的 `source-map' 是最详细的。
        // 
        // externals: ["react", /^@angular\//],
        // 不要遵循/打包这些模块，而是在运行时从环境中请求他们


    }
}