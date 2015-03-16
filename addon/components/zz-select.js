// addon/components/zz-select.js

import Ember from 'ember';
import FormGroupComponent from './zz-form-group';
import ControlMixin from 'zz-form/mixins/control';

// Form Select
//
// Usage:
// {{zz-select property="property name"
//     content=array_of_options
//     optionValuePath=keyForValue
//     optionLabelPath=keyForLabel
//     prompt="Optional default prompt"}}
//
 
export default FormGroupComponent.extend({
  show_icons: false,
  controlView: Ember.Select.extend(ControlMixin, {
    model: Ember.computed.alias('parentView.model'),
    propertyName: Ember.computed.alias('parentView.propertyName'),
    content: Ember.computed.alias('parentView.content'),
    optionValuePath: Ember.computed.alias('parentView.optionValuePath'),
    optionLabelPath: Ember.computed.alias('parentView.optionLabelPath'),
    prompt: Ember.computed.alias('parentView.prompt'),
    multiple: Ember.computed.alias('parentView.multiple')
  }),
  property: void 0,
  content: void 0,
  optionValuePath: void 0,
  optionLabelPath: void 0,
  prompt: void 0,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});
