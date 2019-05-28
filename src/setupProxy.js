const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/app', {
        target: 'http://172.16.55.204:8088/app',
        pathRewrite: {
            "^/app": "/"
        }
    }));
    app.use(proxy('/auth', {
        target: 'http://127.0.0.1:4002/',
        pathRewrite: {
            "^/auth": "/"
        }
    }));
};