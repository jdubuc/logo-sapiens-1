var app = app || {};

app.LogoView = Backbone.View.extend({
    el: '#content',
    template: _.template($('#logo-template').html()),

    render: function() {
        var kwargs = this.model.toJSON();
        var self = this;

        kwargs.cid = this.model.cid;
        this.$el.html(this.template(kwargs));
        this.$('#input input').focus();

        this.$('#input button').click(function() {
            self.check();
        });

        this.$('#input input').keypress(function(event) {
            if(event.which !== 13) return;
            self.check();
        });
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
