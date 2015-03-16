// addon/components/zz-text.js

import Ember from 'ember';
import FormGroupComponent from './zz-form-group';
import ControlMixin from 'zz-form/mixins/control';

// Form Text
//
// Usage:
// {{zz-text property="property name" rows=4}}
//

export default FormGroupComponent.extend({
  controlView: Ember.TextArea.extend(ControlMixin, {
    attributeBindings: ['placeholder'],
    placeholder: Ember.computed.alias('parentView.placeholder'),
    model: Ember.computed.alias('parentView.model'),
    propertyName: Ember.computed.alias('parentView.propertyName'),
    rows: Ember.computed.alias('parentView.rows')
  }),
  property: void 0,
  label: void 0,
  placeholder: void 0,
  rows: 4,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});
