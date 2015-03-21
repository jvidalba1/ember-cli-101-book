import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancel: function() {
      this.transitionToRoute('friends');
      // console.log('+- cancel action in friends new controller');
      return false;
    }
  }
});
