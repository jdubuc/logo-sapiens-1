var app = app || {};

app.LogoPreView = Backbone.View.extend({
    tagName: 'li',
    className: 'logo-preview col-xs-4 col-sm-3',
    template: _.template($('#logo-preview-template').html()),

    render: function() {
        var kwargs = this.model.toJSON();
        kwargs.cid = this.model.cid;
        this.$el.html(this.template(kwargs));
        return this;
    },
});
