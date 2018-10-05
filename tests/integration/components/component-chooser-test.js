import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('component-chooser', 'Integration | Component | component chooser', {
  integration: true
});

test('it renders - default mode', function(assert) {
  this.render(hbs`{{component-chooser}}`);

  assert.equal(this.$().text().trim(), 'No components found');
});

test('it renders the header', function(assert) {
  this.render(hbs`{{component-chooser category="foo"}}`);

  assert.equal(this.$('header').text().trim(), 'foo');
  assert.equal(this.$('li').text().trim(), 'No components found');
});
