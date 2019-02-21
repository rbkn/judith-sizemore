import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | clothing/clothing-item', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:clothing/clothing-item');
    assert.ok(route);
  });
});
