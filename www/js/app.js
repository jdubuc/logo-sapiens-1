var app = app || {};

// Begin Level 1
app.game_levels = new app.Levels();

var logos = new app.Logos();
logos.add({
    name: 'polar',
    img: 'incompletos/polar.png',
});
logos.add({
    name: 'regional',
    img: 'incompletos/regional.png',
});
logos.add({
    name: 'caterpillar',
    img: 'incompletos/caterpillar.png',
});
logos.add({
    name: 'tio rico',
    img: 'incompletos/tiorico.png',
});
logos.add({
    name: 'cines unidos',
    img: 'incompletos/cinesunidos.png',
});
logos.add({
    name: 'televen',
    img: 'incompletos/televen.png',
});
logos.add({
    name: 'savoy',
    img: 'incompletos/savoy.png',
});
logos.add({
    name: 'lucky strike',
    img: 'incompletos/lucky.png',
});
logos.add({
    name: 'makro',
    img: 'incompletos/makro.png',
});
logos.add({
    name: 'directv',
    img: 'incompletos/directv.png',
});
logos.add({
    name: 'alimentos polar',
    img: 'incompletos/Alimentos-polar.png',
});
logos.add({
    name: 'fiat',
    img: 'incompletos/fiat.png',
});
logos.add({
    name: 'enne',
    img: 'incompletos/enne.png',
});
logos.add({
    name: 'nestle',
    img: 'incompletos/nestle.png',
});
logos.add({
    name: 'netuno',
    img: 'incompletos/netuno.png',
});
logos.add({
    name: 'banesco',
    img: 'incompletos/banesco.png',
});
logos.add({
    name: 'red bull',
    img: 'incompletos/red-bull.png',
});
logos.add({
    name: 'adidas',
    img: 'incompletos/adidas.png',
});
logos.add({
    name: 'marlboro',
    img: 'incompletos/marlboro.png',
});
logos.add({
    name: 'pdvsa',
    img: 'incompletos/pdvsa.png',
});
logos.add({
    name: 'tves',
    img: 'incompletos/tves.png',
});

app.game_levels.add({
    number: 1,
    logos: logos,
    unlocked: true,
});
// End Level 1


// Begin Level 2
app.game_levels.add({
    number: 2,
    prev_level: app.game_levels.at(0),
});
// End Level 2


// Dummy levels
for(var i = 3; i <= 15; i++) {
    app.game_levels.add({
        number: i,
    });
}


// Begin Score n' Stuff
$(function() {
    $('#score span').html(app.score = 0);
    $('#money span').html(app.money = 0);

    // On level completed
    app.game_levels.forEach(function(level) {
        level.on('completed', function() {
            $('#score span').html(app.score += 100);
            $('#money span').html(app.money += 40);
        });
    });

    // On logo completed
    app.game_levels.forEach(function(level) {
        level.get('logos').on('completed', function() {
            $('#score span').html(app.score += 10);
            $('#money span').html(app.money += 10);
        });
    });
});
// End Score n' Stuff

