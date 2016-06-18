import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:dashboard', 'Unit | Controller | dashboard', {
});

var no_input_hash = 'KQe1ljdJ',
    lorem = "Lorem ipsum Nostrud proident exercitation do Excepteur pariatur mollit magna Duis reprehenderit commodo sed culpa dolor ut.";

test('computed hash correcty creates hash from empty input', function(assert) {
  let controller = this.subject();

  assert.equal(controller.get('hash'), no_input_hash);
  assert.ok(controller);
});

test('computed hash correcty creates hash from some input', function(assert) {
  let controller = this.subject();

  controller.set('textInput', lorem);
  assert.notEqual(controller.get('hash'), no_input_hash);
  assert.ok(controller);
});

test('computed hash has 8 characters', function(assert) {
  let controller = this.subject();

  controller.set('textInput', lorem + lorem);
  assert.equal(controller.get('hash').length, 8);
});

test('computed hash doesn\'t create less than 8 characters', function(assert) {
  let controller = this.subject();

  controller.set('textInput', '1');
  assert.equal(controller.get('hash').length, 8);
});

test('creates the same hash from the same input', function(assert) {
  let controller = this.subject();

  controller.set('textInput', lorem);
  let firstHash = controller.get('hash');

  controller.set('textInput', 'different input');
  let differentInput = controller.get('hash');

  assert.notEqual(firstHash, differentInput);

  controller.set('textInput', lorem);
  let secondHash = controller.get('hash');

  assert.equal(firstHash, secondHash);
});
