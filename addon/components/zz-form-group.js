// addon/components/zz-form-group.js

import Ember from 'ember';
import InFormMixin from 'zz-form/mixins/in_form';
import HasPropertyMixin from 'zz-form/mixins/has_property';
import HasPropertyValidationMixin from 'zz-form/mixins/has_property_validation';

// Form Group
//
// Wraps labels, controls and help message for optimum spacing and validation styles.
// A wrapper for a single input with its assistances views such as label, help message.
//
// A form group can yield the control's view after or within a label, this is dependent on the control
//     required layout and is defined byt he yieldInLabel property
//
//
// Usage:
// {{zz-form-group
//     status="none|error|warning|success"  {{! Status of the form group }}
//     yieldInLabel=true|false              {{! If true the control view is yieled within the label }}
//     show_successes: true|false           {{! If true validation successes will be rendered(inherited form) }}
//     show_warnings: true|false            {{! If true validation warnings will be rendered(inherited form) }}
//     show_errors: true|false              {{! If true validation errors will be rendered(inherited form)}}
//     show_icons: true|false               {{! If true validation icons will be rendered(inherited form) }}
//     label="Some label"                   {{! Label of the form group(defaults to human form of property name) }}
// }}
//
 
export default Ember.Component.extend(InFormMixin, HasPropertyMixin, HasPropertyValidationMixin, {
  tagName: 'div',
  "class": 'form-group',
  layoutName: 'components/zz-form-group',
  classNameBindings: ['class', 'hasSuccess', 'hasWarning', 'hasError', 'show_icons:has-feedback'],
  attributeBindings: ['disabled'],
  canShowErrors: false,
  hasSuccess: (function() {
    var success;
    success = this.get('validations') && this.get('status') === 'success' && this.get('show_successes') && this.get('canShowErrors');
    this.set('success', success);
    return success;
  }).property('status', 'show_successes', 'canShowErrors'),
  hasWarning: (function() {
    var warning;
    warning = this.get('validations') && this.get('status') === 'warning' && this.get('show_warnings') && this.get('canShowErrors');
    this.set('warning', warning);
    return warning;
  }).property('status', 'show_warnings', 'canShowErrors'),
  hasError: (function() {
    var error;
    error = this.get('validations') && this.get('status') === 'error' && this.get('show_errors') && this.get('canShowErrors');
    this.set('error', error);
    return error;
  }).property('status', 'show_errors', 'canShowErrors'),
  show_successes: Ember.computed.alias('form.show_successes'),
  show_warnings: Ember.computed.alias('form.show_warnings'),
  show_errors: Ember.computed.alias('form.show_errors'),
  show_icons: Ember.computed.alias('form.show_icons'),
  v_success_icon: 'glyphicon glyphicon-ok-sign',
  v_warn_icon: 'glyphicon glyphicon-warning-sign',
  v_error_icon: 'glyphicon glyphicon-exclamation-sign',
  validations: true,
  yieldInLabel: false,
  v_icon: (function() {
    if (!this.get('canShowErrors')) {
      return;
    }
    switch (this.get('status')) {
      case 'success':
        return this.get('show_successes') ? this.get('v_success_icon') : null;
      case 'warning':
      case 'warn':
        return this.get('show_warnings') ? this.get('v_warn_icon') : null;
      case 'error':
        return this.get('show_errors') ? this.get('v_error_icon') : null;
      default:
        return null;
    }
  }).property('status', 'show_successes', 'show_warnings', 'show_errors', 'canShowErrors'),
  init: function() {
    return this._super();
  },

  /*
  Observes the helpHasErrors of the help control and modify the 'status' property accordingly.
   */

  /*
  Listen to the focus out of the form group and display the errors
   */
  focusOut: function() {
    return this.set('canShowErrors', true);
  }
});