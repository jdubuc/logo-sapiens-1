var app = app || {};

app.LogosPreView = Backbone.View.extend({
    el: '#content',
    template: _.template($('#logos-preview-template').html()),

    render: function() {
        this.model = this.model.toJSON().logos;
        this.$el.html(this.template(this.model.toJSON()));
        this.model.each(this.add_logo, this);
    },

    add_logo: function(logo) {
        var view = new app.LogoPreView({model: logo});
        var $el = view.render().$el;

        if(!logo.get('completed')) $el.find('.container').css('background-image', 'none');

        this.$('ul').append($el);
    }
});
