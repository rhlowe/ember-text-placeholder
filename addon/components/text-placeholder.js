import Ember from 'ember';
import layout from '../templates/components/text-placeholder';
import RandomNumberMixin from 'ember-text-placeholder/mixins/random-number';

export default Ember.Component.extend(RandomNumberMixin, {
  characters: [
    '&#9644;', // Black Rectangle, '▬', (http://unicode-table.com/en/25AC/)
    '&#8203;', // Zero Width Space, '​' <- There's a character in there! (http://unicode-table.com/en/200B/)
  ],
  layout,
  _localSize: 140,
  min: 0,
  size: Ember.computed('_localSize', {
    get(key) {
      return this.get('_localSize');
    },
    set(key, value) {
      let _localSize = value;
      switch (value) {
        case 'short':
          _localSize = 16;
          break;
        case 'medium':
          _localSize = 64;
          this.set('min', 16);
          break;
        case 'long':
          _localSize = 256;
          this.set('min', 64);
          break;
      }
      this.set('_localSize', _localSize);
      return _localSize;
    }
  }),// {integer}|{string:'short|medium|long'}
  tagName: 'span',
  textContent: Ember.computed('text', function() {
    return this._generatePlaceholderString();
  }),
  varLength: false,
  _generatePlaceholderString()
  {
    let output = '';
    let size = this.get('size');
    let min = this.get('min');

    if (this.get('varLength')) size = this.randomNumber(size, min);

    for(let i = 0; i < size; i++) {
      output += this.get('characters').join('');
    }
    return output;
  },
});
