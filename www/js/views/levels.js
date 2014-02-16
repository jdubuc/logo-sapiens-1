var app = app || {};

app.LevelsView = Backbone.View.extend({
    tagName: 'ul',
    id: 'levels',
    className: 'row',

    render: function() {
        $('#content').html(this.$el);
        this.model.each(this.add_level, this);
    },

    add_level: function(level) {
        var view = new app.LevelView({model: level});
        this.$el.append(view.render().el);
    }
});
