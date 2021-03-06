import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel() {
    if(!this.get('session.currentUser')) {
      this.transitionTo('login');
    }
  },

  actions: {
    logout() {
      this.transitionTo('login');
    }
  }
});
