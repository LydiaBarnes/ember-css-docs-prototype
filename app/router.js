import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('best-practices');
  this.route('getting-started');
  this.route('getting-started');
  this.route('components');
  this.route('components', { path: '/components/:component_id' });

  this.route('not-found', { path: '/*wildcard' });
});

export default Router;
