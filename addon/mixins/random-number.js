import Mixin from '@ember/object/mixin';

export default Mixin.create({
    randomNumber(max, min) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
});
