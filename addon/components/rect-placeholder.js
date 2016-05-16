import Ember from 'ember';
import layout from '../templates/components/rect-placeholder';

export default Ember.Component.extend({
  layout,

  tagName: '',

  height: 64,
  radiusX: 0,
  radiusY: 0,
  width: 64,
});
