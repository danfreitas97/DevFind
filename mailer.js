const nodemailer = require('nodemailer')
const path = require('path')
const {host, port, user, pass} = require('./config/mail.json')
const hbs = require('nodemailer-express-handlebars')

const transport = nodemailer.createTransport({
    host,
    port,
    auth: {user, pass}}
  );

  const hbsConfig = {
      viewEngine: {
      extName: ".html",
      partialsDir: path.resolve('./mail'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./mail'),
    extName: '.html'
}

transport.use('compile', hbs(hbsConfig))

  module.exports = transport;