import Ember from 'ember';

export default Ember.Mixin.create({
    randomNumber(max, min) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
});
