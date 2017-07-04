# webpack 笔记

###Vendor Code Splitting
many third party libraries for framework/functionality needs does not change often。the [hash] portion in the vendor filename must remain constant

### ExtractTextWebpackPlugin v2.61
会单独从js中导入(require import)的css文件，将其分离出来放到一个指定的文件，并在index.html加入标签引用进来。
```javascript 
+var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    module: {
         rules: [{
             test: /\.css$/,
-            use: [ 'style-loader', 'css-loader' ]
+            use: ExtractTextPlugin.extract({
+                use: 'css-loader'
+            })
         }]
     },
+    plugins: [
+        new ExtractTextPlugin('styles.css'),
+    ]
}
```
