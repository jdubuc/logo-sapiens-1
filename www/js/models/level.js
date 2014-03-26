var app = app || {};

app.Level = Backbone.Model.extend({
    defaults: {
        number: 0,
        logos: new app.Logos(),
        unlocked: false,
        prev_level: null,
    },

    initialize: function() {
        this.get('logos').each(function(item) {
            item.set('level_number', this.get('number'));
        }, this);

        this.listenTo(this.get('logos'), 'completed', this.on_logo_completed)
        if(this.get('prev_level') != null) this.listenTo(this.get('prev_level'), 'completed', this.unlock)
    },

    completed: function() {
        return this.get('logos').where({completed: true}).length;
    },

    total: function() {
        return this.get('logos').length;
    },

    on_logo_completed: function() {
        if(this.completed() == this.total()) this.trigger('completed');
    },

    unlock: function() {
        this.set('unlocked', true);
    },
});
