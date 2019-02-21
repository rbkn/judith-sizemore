import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('clothingItem', params.clothing_id ,{include: 'sizes'});
  }
});
