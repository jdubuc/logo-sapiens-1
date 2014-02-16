var app = app || {};

app.Logo = Backbone.Model.extend({
    defaults: {
        name: '',
        img: '',
        completed: false,
    },

    check: function(string) {
        if(string.toUpperCase() === this.get('name').toUpperCase()) {
            this.set('img', this.get('img').replace('incompletos', 'completos'));
            this.set('completed', true);
        }
    },
});
