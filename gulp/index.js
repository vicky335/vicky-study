var requireDir = require('require-dir'),
    gulp = require('gulp'), // gulp：基础库
    config = require('./config')(), // config.js模块
    plugins = require('gulp-load-plugins')({
        lazy: true
    }), // gulp插件
    args = require('yargs').argv, // 模块yargs（用来接受命令行参数的）
    Promise = require('es6-promise').polyfill();

var taskList = require('fs').readdirSync('./gulp/tasks/');
taskList.forEach(function(file) {
    require('./tasks/' + file)(gulp, config, plugins, args);
});