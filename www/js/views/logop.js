var app = app || {};

app.LogoPreView = Backbone.View.extend({
    tagName: 'li',
    className: 'logo-preview col-xs-12 col-sm-4',
    template: _.template($('#logo-preview-template').html()),

    render: function() {
        var kwargs = this.model.toJSON();
        kwargs.cid = this.model.cid;
        this.$el.html(this.template(kwargs));
        return this;
    },
});
