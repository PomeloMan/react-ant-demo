const path = require('path');
// const {
//     override,
//     fixBabelImports,
//     addWebpackAlias
// } = require('customize-cra');

// const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {

    //css模块化
    // config = rewireCssModules(config, env);

    //配置别名
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve('src'),
        '@assets': path.resolve('@assets')
    }
    return config;
}

// module.exports = override(
//     fixBabelImports('import', {
//         libraryName: 'antd',
//         libraryDirectory: 'es',
//         style: 'css'
//     }),
//     addWebpackAlias({
//         "@": path.resolve(__dirname, "src"),
//         "@assets": path.resolve(__dirname, "src/assets")
//     })
// );
