// addon/components/zz-checkbox.js

import Ember from 'ember';
import ZzFormGroupComponent from './zz-form-group';
//import ZzheckboxComponent from './zz-checkbox';
import ControlMixin from 'zz-form/mixins/control';

// Form Checkbox
//
// Usage:
// {{zz-checkbox property="property name"}}
//

export default ZzFormGroupComponent.extend({
  show_successes: false,
  show_warnings: false,
  show_errors: false,
  show_icons: false,
  validations: false,
  yieldInLabel: true,
  controlView: Ember.Checkbox.extend(ControlMixin, {
    "class": false,
    model: Ember.computed.alias('parentView.parentView.model'),
    propertyName: Ember.computed.alias('parentView.parentView.propertyName'),
    init: function() {
      this._super();
      return Ember.Binding.from("model." + (this.get('propertyName'))).to('checked').connect(this);
    }
  }),
  wrapperClass: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-offset-2 col-sm-10';
    }
  }).property('form.form_layout'),
  labelWrapperClass: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'checkbox';
    }
    return null;
  }).property('form.form_layout'),
  "class": (function() {
    if (this.get('form.form_layout') !== 'horizontal') {
      return 'checkbox';
    }
    return 'form-group';
  }).property('form.form_layout')
});