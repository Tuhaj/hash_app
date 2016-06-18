import DS from 'ember-data';

export default DS.Model.extend({

  hash:         DS.attr('string'),
  input:        DS.attr('string'),
  userEmail:    DS.attr('string'),
  createdAt:    DS.attr('string', {
    defaultValue: function() { return new Date(); }
  })

});
