const users = require('./users/users.service.js');
const publicMessage = require('./public-message/public-message.service.js');
const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(publicMessage);
  app.configure(messages);
};
