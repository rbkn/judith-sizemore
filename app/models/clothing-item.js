import DS from 'ember-data';

export default DS.Model.extend({
  // retailer_code: DS.attr('string'),
  name: DS.attr('string'),
  image: DS.attr(),
  description: DS.attr('string'),
  sizes: DS.hasMany('size',{async: true})
  //retailer_sizing?

});
