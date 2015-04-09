import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'codecamp/tests/helpers/start-app';

var application;

module('Acceptance: Sessions', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /sessions', function(assert) {
  visit('/sessions');
  andThen(function() {
    assert.equal(currentURL(), '/sessions');
    assert.equal(find('.session:eq(0)').text().trim(), 'Session: 1 - Ember');
    assert.equal(find('.session:eq(1)').text().trim(), 'Session: 2 - React');
  });
});
