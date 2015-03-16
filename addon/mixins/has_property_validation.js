// addon/components/mixins/has_property_validation.js

import Ember from 'ember';

// A mixin that enriches a view that is attached to a model property that has validation
//     support.
//
// This mixin binds a property named `errors` to the model's `model.errors.@propertyName` array
// 

export default Ember.Mixin.create({
  init: function() {
    this._super();
    Ember.assert(!Ember.isNone(this.get('propertyName')), 'propertyName is required.');
    return Ember.Binding.from('model.errors.' + this.get('propertyName')).to('errors').connect(this);
  },
  status: (function() {
    if (this.get('errors.length')) {
      return 'error';
    } else {
      return 'success';
    }
  }).property('errors.length')
});