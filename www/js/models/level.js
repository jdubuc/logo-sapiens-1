var app = app || {};

app.Level = Backbone.Model.extend({
    defaults: {
        number: 0,
        logos: new app.Logos(),
    },

    initialize: function() {
        this.get('logos').each(function(item) {
            item.set('level_number', this.get('number'));
        }, this);
    },

    completed: function() {
        return this.get('logos').where({completed: true}).length;
    },

    total: function() {
        return this.get('logos').length;
    },
});
