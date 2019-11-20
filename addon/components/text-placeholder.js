import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/text-placeholder';
import RandomNumberMixin from 'ember-text-placeholder/mixins/random-number';

export default Component.extend(RandomNumberMixin, {
  layout,

  classNames: ['TextPlaceholder'],
  tagName: 'span',

  _localSize: 140,

  characters: [
    '▀', // Upper Half Block, '&#9600;', '▀', (http://unicode-table.com/en/2580/)
    '​', // Zero Width Space, '&#8203;', '​' <- There's a character in there! (http://unicode-table.com/en/200B/)
  ],
  min: 0,
  varLength: false,

  // {integer}|{string:'short|medium|long'}
  size: computed('_localSize', {
    get() {
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
  }),
  textContent: computed(function() {
    return this._generatePlaceholderString();
  }),

  _generatePlaceholderString()
  {
    let size = this.get('size');
    let min = this.get('min');

    if (this.get('varLength')) {
      this.set('size', this.randomNumber(size, min));
    }

    return this._recursivelyJoincharacters();
  },

  _recursivelyJoincharacters()
  {
    const characters = this.get('characters');
    const denominator = characters.length * characters[0].length;
    const size = this.get('size');
    let output = '';

    while(output.length / denominator < size) {
      output += characters.join('');
    }
    return output;
  },
});
