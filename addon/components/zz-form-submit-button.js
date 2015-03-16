// addon/components/zz-form-submit-button.js

import Ember from 'ember';
import InFormMixin from 'zz-form/mixins/in_form';

// Form Submit Button
//
// Syntax:
// {{zz-form-submit text="Submit"}}
//
 
export default Ember.Component.extend(InFormMixin, {
  classes: 'btn btn-default',
  classNames: ['form-group'],
  text: 'Submit',
  type: 'submit',
  attributeBindings: ['disabled'],
  horiClass: 'col-sm-offset-2 col-sm-10',
  disabled: (function() {
    if (!Ember.isNone(this.get('model.isValid'))) {
      return !this.get('model.isValid');
    } else {
      return false;
    }
  }).property('model.isValid')
});