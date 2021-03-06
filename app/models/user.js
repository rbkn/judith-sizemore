import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  login: DS.attr('string'),
  name: DS.attr('string'),
  measurement: DS.belongsTo('user-measurement')
});
