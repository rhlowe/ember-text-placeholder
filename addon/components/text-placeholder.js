import Ember from 'ember';
import layout from '../templates/components/text-placeholder';

export default Ember.Component.extend({
  layout,
  tagName: 'span',

  characters: [
    '&#9644;', // Black Rectangle, '▬'
    '&#8203;', // Zero Width Space, '​' <- There's a character in there!
  ],
  _localSize: 140,
  size: Ember.computed('_localSize', {
    get(key) {
      return this.get('_localSize');
    },
    set(key, value) {
      let _localSize = value;
      switch (value) {
        case 'short':
          _localSize = 10;
          break;
        case 'medium':
          _localSize = 75;
          break;
        case 'long':
          _localSize = 250;
          break;
      }
      this.set('_localSize', _localSize);
      return _localSize;
    },
  }),// {integer}|{string:'short|medium|long'}
  varLength: false,

  textContent: Ember.computed('text', function() {
    return this._generatePlaceholderString();
  }),

  _generatePlaceholderString()
  {
    let output = '';
    let size = this.get('size');

    if (this.get('varLength')) size = this._generateRandomInt(size);

    for(let i = 0; i < size; i++) {
      output += this.get('characters').join('');
    }
    return output;
  },

  _generateRandomInt(max, min = 0)
  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
});
