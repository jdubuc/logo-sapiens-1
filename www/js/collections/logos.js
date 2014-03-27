var app = app || {};

app.Logos = Backbone.Collection.extend({
    model: app.Logo,

    initialize: function() {
        this.forEach(function(el, i) {
            this.listenTo(el, 'completed', this.trigger_on_completation);
        }, this);

        this.on('add', this.update_rel_logos);
    },

    trigger_on_completation: function() {
        this.trigger('completed');
    },

    update_rel_logos: function(new_logo) {
        if(this.length <= 1) return;

        var old_head = this.at(this.length-2);

        new_logo.set('prev_logo', old_head);
        old_head.set('next_logo', new_logo);
    },
});
