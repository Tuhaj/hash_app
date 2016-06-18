import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.currentUser'),

  actions: {
    getInput() {
      console.log("gets input");
      console.log("generates hash");
      console.log("stores hash");
      console.log("cleans fields");
    },

    logout() {
      this.get('session').logout();
      return true;
    }
  }
});
