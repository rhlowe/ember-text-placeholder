import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('text-placeholder', 'Integration | Component | text placeholder', {
  integration: true
});

test('it renders at various fixed sizes', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{text-placeholder}}`);
  assert.equal(this.$().text().trim().length, '280', 'default is 140 rectangle/zero width space character pairs.');

  this.render(hbs`{{text-placeholder size='short'}}`);
  assert.equal(this.$().text().trim().length, '32', 'short size is 16 rectangle/zero width space character pairs.');

  this.render(hbs`{{text-placeholder size='medium'}}`);
  assert.equal(this.$().text().trim().length, '128', 'medium size is 64 rectangle/zero width space character pairs.');

  this.render(hbs`{{text-placeholder size='long'}}`);
  assert.equal(this.$().text().trim().length, '512', 'long size is 256 rectangle/zero width space character pairs.');
});
