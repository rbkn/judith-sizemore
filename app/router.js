  import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('clothing', function() {
    this.route('clothing-item',{path:'item/:clothing_id'}, function() {
    //  this.route('sizes');
    });
  });
  this.route('login');
  this.route('user', {path:'users/:user_id'}, function() {
    this.route('measurement');
  });
});

export default Router;
