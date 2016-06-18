import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.currentUser'),
  hash: Ember.computed('textInput', function() {
    let hashids = new Hashids(this.get('textInput'), 8),
        id = hashids.encode(1234);
    return id;
  }),

  actions: {
    getInput() {
      console.log("generates hash", this.get('hash'));
      console.log("stores hash");
      console.log("cleans fields");
    },

    logout() {
      this.get('session').logout();
      return true;
    }
  }
});
