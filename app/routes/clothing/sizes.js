import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let clothingItem = this.modelFor('clothing.clothingItem');
    return clothingItem.get('sizes');
  },
  title() {
    let clothingName = this.modelFor('clothing.clothingItem').get('name');
    return `${clothingName} - size list`;
  }
});
