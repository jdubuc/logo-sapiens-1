var app = app || {};

app.LogoView = Backbone.View.extend({
    el: '#content',
    template: _.template($('#logo-template').html()),

    render: function() {
        var self = this;

        this.$el.html(this.template(this.model.toJSON()));

        this.$('#input button').click(function() {
            self.check();
        });

        this.$('#input input').keypress(function(event) {
            if(event.which !== 13) return;
            self.check();
        });

        if(!this.model.get('completed')) this.$('.container').css('background-image', 'none');
    },

    check: function() {
        this.model.check($('#input input').val().trim());

        if(this.model.get('completed')) {
             this.render();

        } else {
            this.$('input').addClass('wrong-guess');
        }
    },
});
