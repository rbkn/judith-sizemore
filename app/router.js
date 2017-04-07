import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('clothing', function() {
    this.route('clothing-item',{path:'/:clothing_id'}, function() {
    //  this.route('sizes');
    });
  });
  // this.route('clothing',{path:'clothing/:clothing_id'},function(){
  //   this.route('sizes',function() {
  //     this.route('size',{path:'sizes/:size_id'});
  //   });
  // });
});

export default Router;
