var require_dir = require('require-dir');
var path = require('path');
//获取配置信息
var config = require('./task.config.js');
global.config = config;

//获取所有任务;
var task = require_dir('./task');

