import { Model,belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  clothingItem: belongsTo('clothing-item')
});
