import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.currentUser'),
  hash: Ember.computed('textInput', function() {
    let hashids = new Hashids(this.get('textInput'), 8),
        id = hashids.encode(1234);
    return id;
  }),


  allHashed: function() {
    return this.store.findAll('hash');
  }.property('hashes.@each'),

  actions: {
    addInput() {
      let store = this.store;
      let newHash = store.createRecord('hash', {
        hash: this.get('hash'),
        input: this.get('textInput'),
        userEmail: this.get('user')
      });
      newHash.save();
      this.set('textInput', '');
    },

    logout() {
      this.get('session').logout();
      return true;
    }
  }
});
