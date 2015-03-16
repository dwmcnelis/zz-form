// addon/components/zz-input.js

import Ember from 'ember';
import FormGroupComponent from './zz-form-group';
import ControlMixin from 'zz-form/mixins/control';

// Form Input
//
// Syntax:
// {{zz-input property="property name"}}
//
 
export default FormGroupComponent.extend({
  controlView: Ember.TextField.extend(ControlMixin, {
    attributeBindings: ['placeholder', 'required', 'autofocus', 'disabled'],
    placeholder: Ember.computed.alias('parentView.placeholder'),
    required: Ember.computed.alias('parentView.required'),
    autofocus: Ember.computed.alias('parentView.autofocus'),
    disabled: Ember.computed.alias('parentView.disabled'),
    type: Ember.computed.alias('parentView.type'),
    model: Ember.computed.alias('parentView.model'),
    propertyName: Ember.computed.alias('parentView.propertyName')
  }),
  property: void 0,
  label: void 0,
  placeholder: void 0,
  required: void 0,
  autofocus: void 0,
  disabled: void 0,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});