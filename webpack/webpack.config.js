module.exports = function(env) {
    return {
        // 上下文
        context: config.context,
        // 入口文件
        entry: config.src,
        // 打包輸出的配置
        output: {
            path: path.join(config.jsDest, project),
            filename: '[name].js',
            chunkFilename: '[name].[chunkhash:8].js',
            publicPath: '/assets/' + project + '/'
        },
        // sourceMap選項，便於開發調試
        devtool: "eval",
        // 監聽模式，增量更新，開發必備
        watch: false,
        // 優化
        profile: true,
        // 緩存臨時文件，更快構建
        cache: true,
        module: {
            // 對文件做預處理，打包任何靜態文件
            loaders: getLoaders(env)
        },
        resolve: {
            // 模塊別名，方便引用模塊
            alias: getAlias(env)
        },
        // webpack的一些內置功能
        plugins: getPlugins(env)
    };
}
