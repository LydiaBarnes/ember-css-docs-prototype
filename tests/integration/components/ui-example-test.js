import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-example', 'Integration | Component | ui example', {
  integration: true
});

test('it renders - default mode', function(assert) {

  this.render(hbs`{{ui-example}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-example}}
      template block text
    {{/ui-example}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders with example markup', function(assert) {
  this.render(hbs`
    {{ui-example codeContent='<button class=\"button-default\">Default</button>'}}
  `);

  // Test if example block exists
  assert.equal(this.$('.ui-example').length > 0, true);
  // Test if contains properly rendered button
  assert.equal(this.$('.ui-example button').length > 0, true);
  // Test if code block exists
  assert.equal(this.$('.code-block').length > 0, true);
  // Test if code block has printed button html
  assert.equal(this.$('.code-block code').text().trim(), '<button class="button-default">Default</button>');
});
