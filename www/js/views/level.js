var app = app || {};

app.LevelView = Backbone.View.extend({
    tagName: 'li',
    className: 'level col-sm-6',
    template: _.template($('#level-template').html()),

    render: function() {
        var kwargs = this.model.toJSON();
        kwargs.completed = this.model.completed();
        kwargs.total = this.model.total();
        this.$el.html(this.template(kwargs));
        return this;
    },
});
