import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  include: ['user-measurement'],
//  alwaysIncludeLinkageData: true,
});
