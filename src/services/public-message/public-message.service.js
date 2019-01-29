// Initializes the `public-message` service on path `/public-message`
const createService = require('feathers-nedb');
const createModel = require('../../models/public-message.model');
const hooks = require('./public-message.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/public-message', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('public-message');

  service.hooks(hooks);
};
