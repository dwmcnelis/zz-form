import Ember from 'ember';
/*global alert*/

export default Ember.ObjectController.extend({
  actions: {
    submit: function() {
      return alert("Logged in!");
    }
  }
});