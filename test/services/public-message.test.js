const app = require('../../src/app');

describe('\'public-message\' service', () => {
  it('registered the service', () => {
    const service = app.service('public-message');
    expect(service).toBeTruthy();
  });
});
