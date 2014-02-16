var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        '': 'render_levels',
        'level/:id': 'render_level',
        'level/:id/logo/:id': 'render_logo',
    },

    render_level: function(id) {
        new app.LogosPreView({model: app.game_levels.at(id-1)}).render();
    },

    render_levels: function() {
        new app.LevelsView({model: app.game_levels}).render();
    },

    render_logo: function(level, logo) {
        new app.LogoView({model: app.game_levels.at(level-1).get('logos').get(logo)}).render();
    },
});

new app.Router()
Backbone.history.start();
