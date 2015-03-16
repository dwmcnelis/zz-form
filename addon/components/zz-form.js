// addon/components/zz-form.js

import Ember from 'ember';
import Utils from 'zz-form/utils/utils';

// Form
//
// A component for rendering a form element.
//
// Usage:
// {{zz-form
//     form_layout="form|inline|horizontal"   {{! The layout of the form }}
//     model="some_model_instance"            {{! The model bound to the form(if any) }}
//     action="some_action"                   {{! The action to be invoked on the controller when a form is submitted }}
//     show_successes=true|false              {{! If true validation successes will be rendered }}
//     show_warnings=true|false               {{! If true validation warnings will be rendered }}
//     show_errors=true|false                 {{! If true validation errors will be rendered }}
//     show_icons=true|false                  {{! If true validation icons will be rendered }}
//     submit_button=true|false               {{! If true a submit button will be rendered }}
// }}
//

export default Ember.Component.extend({
  tagName: 'form',
  classNameBindings: ['form_layout_class', 'extra_classes'],
  attributeBindings: ['role'],
  role: 'form',
  form_layout_class: (function() {
    switch (this.get('form_layout')) {
      case 'horizontal':
      case 'inline':
        return "form-" + (this.get('form_layout'));
      default:
        return 'form';
    }
  }).property('form_layout'),

  // Extra css classes 
  //
  // @property {Ember.String}
  // @default  null
  // @public
  //
  extra_classes: null,
  
  isDefaultLayout: Utils.createBoundSwitchAccessor('form', 'form_layout', 'form'),
  isInline: Utils.createBoundSwitchAccessor('inline', 'form_layout', 'form'),
  isHorizontal: Utils.createBoundSwitchAccessor('horizontal', 'form_layout', 'form'),
  action: 'submit',
  model: void 0,
  form_layout: 'form',
  show_successes: false,
  show_warnings: true,
  show_errors: true,
  show_icons: true,
  submit_button: false,

  
  // Form submit
  // Optionally execute model validations and perform a form submission.
  // 
  submit: function(e) {
    var promise;
    if (e) {
      e.preventDefault();
    }
    if (Ember.isNone(this.get('model.validate'))) {
      return this.get('targetObject').send(this.get('action'));
    } else {
      promise = this.get('model').validate();
      return promise.then((function(_this) {
        return function() {
          if (_this.get('model.isValid')) {
            return _this.get('targetObject').send(_this.get('action'));
          }
        };
      })(this));
    }
  }
});