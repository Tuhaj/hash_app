import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.currentUser'),

  allHashed: function() {
    return this.store.findAll('hash');
  }.property(),

  actions: {
    logout() {
      this.get('session').logout();
      return true;
    }
  }
});
