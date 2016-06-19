import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      this.get('flashMessages').success('You have signed in successfully');
      this.transitionTo('dashboard');
    }
  }
});
