var gUtil = require('gulp-util');
var require_dir = require('require-dir');
//获取配置信息
var config = require('./task.config.js');

global.config = config;
global.curPath = process.env.PWD || process.cwd();
global.env = gUtil.env;
console.log(env);
//获取所有任务;
var task = require_dir('./task');

