let fs = require('fs');
let path = require('path');
let Config = require('./purConfig');
let Logger = require('./modules/logger');
let express = require('express');
let bodyParser = require('body-parser');
let nodemailer = require('nodemailer');


class PurServer {
  constructor() {
    this.logger = new Logger();
    this.config = new Config(this.logger);

    let app = this.getApp();
    app.use(bodyParser.json({
      limit: '20mb'
    }))

    app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));
    app.use(express.static(path.join(__dirname, '../../dist')));
    app.use('/dist', express.static(path.join(__dirname, '../../dist')));
    app.use('/static', express.static(path.join(__dirname, '../../static')));
    app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../../dist/index.html')));
    app.post('/mail', this.sendamail.bind(this))


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

  sendamail(req, res) {
    let payload = req.body

    let mailConfig = {
      pool: true,
      host: 'smtp.gmail.com',
      port: 587,
      requireTLS: true,
      tls: {
        rejectUnauthorized: false
      },
      auth: {
        user: this.config.get('mail_user', ''),
        pass: this.config.get('mail_password', '')
      }
    }
    this.transporter = nodemailer.createTransport(mailConfig)
    let mailOptions = {
      from: payload.email,
      to: this.config.get('mail_user', ''),
      subject: 'Anfrage von ' + payload.name,
      html: payload.message
    }
    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        this.logger.error(error)
        // res.status(501).send(error)
        // return
      }
      this.logger.info('email sent: ' + info.response)
      res.send(info)
      resolve()
    })
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
