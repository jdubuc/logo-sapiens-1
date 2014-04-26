var app = app || {};

app.HelpsView = Backbone.View.extend({
    el: '#content',
    template: _.template($('#helps-template').html()),

    render: function() {
        var kwargs = this.model.toJSON();
        kwargs.cid = this.model.cid;
        this.$el.html(this.template(kwargs));
    },
});
