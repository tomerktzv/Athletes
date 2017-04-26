'use strict';

// create a global logger
var logger = Array();
exports.logger = logger;

var athlete = require('./athlete'),
    eventsConfig = require('./config').events;

// var app = express();
var sm = new athlete('Tomer', 'Snowboard', 13);
var sm2 = new athlete('Papushe','UFC', 24);
var sm3 = new athlete('Naor','Rugby', 7);

//catch emit events with callback functions
sm.on(eventsConfig.scoreChanged, sm.showScoreChanged);
sm.on(eventsConfig.scoreNotChanged, sm.showScoreNotChanged);
sm.on(eventsConfig.showGenre, sm.showSportsGenre);
sm2.on(eventsConfig.scoreChanged, sm2.showScoreChanged);
sm2.on(eventsConfig.scoreNotChanged, sm2.showScoreNotChanged);
sm2.on(eventsConfig.showGenre, sm.showSportsGenre);
sm3.on(eventsConfig.scoreChanged, sm.showScoreChanged);
sm3.on(eventsConfig.scoreNotChanged, sm.showScoreNotChanged);
sm3.on(eventsConfig.showGenre, sm.showSportsGenre);

sm.removeScore(14);
sm.removeScore(3);
sm2.addScore(23);
sm3.removeScore(5);
sm.getSportGenre();
sm2.getSportGenre();
sm3.getSportGenre();