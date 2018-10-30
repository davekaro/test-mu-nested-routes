import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | levelthree', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:levelthree');
    assert.ok(route);
  });
});
