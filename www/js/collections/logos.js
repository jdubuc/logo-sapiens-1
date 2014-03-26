var app = app || {};

app.Logos = Backbone.Collection.extend({
    model: app.Logo,

    initialize: function() {
        this.forEach(function(el, i) {
            this.listenTo(el, 'completed', this.trigger_on_completation);
        }, this);
    },

    trigger_on_completation: function() {
        this.trigger('completed');
    },
});
