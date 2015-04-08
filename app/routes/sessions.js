import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var session1 = {id: 1, name: "Ember"};
        var session2 = {id: 2, name: "React"};
        return [
            session1,
            session2
        ];
    }
});
