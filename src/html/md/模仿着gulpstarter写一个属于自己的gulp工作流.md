# 模仿着gulpstarter写一个属于自己的gulp工作流
[blendid](https://github.com/beierweiwei/blendid)
## 插件
- browserSync
用法：
```javascript
    var browserSync = require('browser-sync');
    browserSync.init(config.tasks.browserSync);
```

- webpack
用法：
```javascript
    var webpackMultiConfig = require('../lib/webpack-multi-config')
    var webpack           = require('webpack');
    var webpackConfig = webpackMultiConfig('development')
    var compiler = webpack(webpackConfig)
```

