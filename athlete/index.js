'use strict';

var EventEmitter = require('events'),
    logger = require('../index').logger,
    eventsConfig = require('../config').events;



module.exports = class sportsManagement extends EventEmitter{
    constructor(name, sportsGenre, stats) {
        super();
        this.name = name;
        this.sportsGenre = sportsGenre;
        this.stats = stats;
        console.log(`${name} was created with ${this.stats} points`);
        console.log('------------------');
    }

    removeScore(penalty) {
        var penaltyMsg = `removing ${penalty} points from ${this.name}`;
        if (penalty > this.stats) {
            this.emit(eventsConfig.scoreNotChanged); // initiate Emit event
            return;
        }
        this.stats -= penalty;
        console.log(penaltyMsg);
        logger.push(penaltyMsg); //
        console.log('------------------');
        this.emit(eventsConfig.scoreChanged); // initiate Emit event
    }

    addScore(points) {
        var addMsg = `adding ${points} points to ${this.name}`;
        this.stats += points;
        console.log(addMsg);
        logger.push(addMsg);
        console.log('------------------');
        this.emit(eventsConfig.scoreChanged); // initiate Emit event
    }

    getSportGenre() {
        this.emit(eventsConfig.showGenre);
    }

    // callback functions
    showScoreChanged() {
        var scoreChangedMsg = `${this.name} now has ${this.stats} points remaining`;
        console.log(scoreChangedMsg);
        logger.push(scoreChangedMsg);
        console.log('------------------');
    }

    showScoreNotChanged() {
        var scoreNotChangedMsg = `Penalty is too high than ${this.name}'s original score, remains with ${this.stats} points`;
        console.log(scoreNotChangedMsg);
        logger.push(scoreNotChangedMsg);
        console.log('------------------');
    }

    showSportsGenre() {
        var infoMsg = `Name: ${this.name}, Genre: ${this.sportsGenre} with the score of: ${this.stats}`;
        console.log(infoMsg);
        logger.push(infoMsg);
        console.log('------------------');
    }
};