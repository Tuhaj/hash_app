import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,

  login(user) {
    this.set('currentUser', user);
    Cookies.set('user', user);
  },

  logout() {
    this.set('currentUser', null);
    Cookies.remove('user');
  },

  initializeFromCookie: function() {
    let user = Cookies.get('user');
    if(!!user) {
      this.set('currentUser', user);
    }
  }.on('init')


});
