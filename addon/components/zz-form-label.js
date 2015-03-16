// addon/components/zz-form-label.js

import Ember from 'ember';
import InFormMixin from 'zz-form/mixins/in_form';

// Form Label
//
// When styled with bootstrap, when form is rendered horizontally, the label require the 'extraClass' property to
//     be set to a value such 'col-sm-2' to be aligned properly.
//
// Usage:
// {{zz-form-label
//     text="Some label"
//     extraClass="col-sm-2"
// }}
//
// Or can serve as a block helper for elements that needs to be wrapped within label element.
// {{#zz-form-label text="Active?"}}
//     {{zz-checkbox}}
// {{/zz-form-label}}
//
 
export default Ember.Component.extend(InFormMixin, {
  tagName: 'label',
  classNames: ['control-label'],
  classNameBindings: ['extraClass', 'inlineClassCalc', 'horiClassCalc'],
  attributeBindings: ['for'],
  horiClass: 'col-sm-2',
  horiClassCalc: (function() {
    if (this.get('form.isHorizontal') && this.get('horiClass')) {
      return this.get('horiClass');
    }
  }).property('form.isHorizontal'),
  inlineClass: 'sr-only',
  inlineClassCalc: (function() {
    if (this.get('form.isInline') && this.get('inlineClass')) {
      return this.get('inlineClass');
    }
  }).property('form.form_layout')
});
