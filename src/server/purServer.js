let fs = require('fs');
let path = require('path');
let Config = require('./purConfig');
let Logger = require('./modules/logger');
let express = require('express');


class PurServer {
    constructor() {
        this.logger = new Logger();
        this.config = new Config(this.logger);

        let app = this.getApp();

        app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));
        app.use('/dist', express.static(path.join(__dirname, '../../dist')));
        app.use('/static', express.static(path.join(__dirname, '../../static')));
        app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../../dist/index.html')));

        return this.startServer(app, process.env.PORT || 4000);
    }

    noCache(req, res, next) {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        next();
    }

    getApp() {
        let app = express();
        app.use(require('body-parser').json());
        return app;
    }

    getHost(req) {
        let protocol = 'https';
        if (req.headers.host.split(':')[0] === 'localhost') {
            protocol = 'http';
        }
        return `${protocol}://${req.headers.host}`;
    }

    startServer(app, port) {
        let http = require('http');
        let host = this.config.config.host || 'localhost';
        return http.createServer(app).listen(port, host, () => {
            this.logger.info(`Server started on ${host}:${port}`);
            this.logger.info(`running node ${process.version}`);
        });
    }
}

module.exports = new PurServer();