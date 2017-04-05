import DS from 'ember-data';

export default DS.Model.extend({
  waistWidth: DS.attr(),
  shoulderWidth: DS.attr(),
  armLength: DS.attr(),
  armWidth: DS.attr(),
  underBust: DS.attr(),
  overBust: DS.attr(),
  hipWidth: DS.attr(),
  thighWidth: DS.attr(),
  calfWidth: DS.attr(),
  legLength: DS.attr(),
  wristWidth: DS.attr(),
  ankleWidth: DS.attr(),
  height: DS.attr(),
  clothingItem: DS.belongsTo('clothing-item')
});
