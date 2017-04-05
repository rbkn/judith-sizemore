import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr(),
  description: DS.attr('string'),
  sizes: DS.hasMany('size')
});
