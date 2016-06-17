import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    login() {
      let email = this.get('userEmail');
      this.get('session').login(email);
      return true;
    }
  }
});
