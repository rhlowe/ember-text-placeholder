import Ember from 'ember';
import RandomNumberMixin from 'ember-text-placeholder/mixins/random-number';
import { module, test } from 'qunit';

module('Unit | Mixin | random number');

test('returns a random number between 0 and 10', function(assert) {
  let RandomNumberObject = Ember.Object.extend(RandomNumberMixin);
  let subject = RandomNumberObject.create();

  assert.expect(100);

  for(let i = 0; i < 100; i++) {
    let result = subject.randomNumber(10, 0);
    assert.ok(0 <= result <= 10, `result = ${result}`);
  }
});
