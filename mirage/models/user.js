import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
    userMeasurement: belongsTo('user-measurement')
});
