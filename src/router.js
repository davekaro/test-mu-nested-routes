import EmberRouter from '@ember/routing/router';
import config from '../config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('levelone', function() {
    this.route('leveltwo', function() {});
  });
});

export default Router;
