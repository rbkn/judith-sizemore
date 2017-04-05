import DS from 'ember-data';
import config from 'judith-sizemore/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiHost,
  namespace: config.apiNamespace
});
