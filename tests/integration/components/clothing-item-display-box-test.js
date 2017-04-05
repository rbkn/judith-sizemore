import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('clothing-item-display-box', 'Integration | Component | clothing item display box', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{clothing-item-display-box}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#clothing-item-display-box}}
      template block text
    {{/clothing-item-display-box}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
