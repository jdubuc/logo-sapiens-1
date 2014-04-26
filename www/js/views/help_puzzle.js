var app = app || {};

app.PuzzleView = Backbone.View.extend({
    el: '#content',
    template: _.template($('#puzzle-template').html()),

    render: function() {
        if(app.money < 100) return;

        $('#money span').html(app.money -= 100);
        this._render();
    },

    _render: function() {
        var kwargs = this.model.toJSON();
        kwargs.cid = this.model.cid;
        this.$el.html(this.template(kwargs));

        var $btn_back = this.$('.btn-back');
        $btn_back.css('opacity', 0);

        puzzleRun('./img/puzzles/' + kwargs.level_number + '/' + kwargs.img.replace(/[^/]*\//, ''), $btn_back);
    },
});
