import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('size-entry-form', 'Integration | Component | size entry form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{size-entry-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#size-entry-form}}
      template block text
    {{/size-entry-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
