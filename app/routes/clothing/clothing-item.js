import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('clothingItem', params.clothing_id);
  }
});
