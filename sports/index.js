'use strict';

var EventEmitter = require('events'),
    logger = require('../logger').logger,
    // logger = require('../index').logger,
    eventsConfig = require('../config').events;

// var check = `removing ${this.penalty} points from ${this.name}`;


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
        if (penalty > this.stats) {
            this.emit(eventsConfig.scoreNotChanged); // initiate Emit event
            return;
        }
        this.stats -= penalty;
        console.log(`removing ${penalty} points from ${this.name}`);
        logger.push(`removing ${penalty} points from ${this.name}`); //
        console.log('------------------');
        this.emit(eventsConfig.scoreChanged); // initiate Emit event
    }

    addScore(points) {
        this.stats += points;
        console.log(`adding ${points} points to ${this.name}`);
        logger.push(`adding ${points} points to ${this.name}`);
        console.log('------------------');
        this.emit(eventsConfig.scoreChanged); // initiate Emit event
    }

    getSportGenre() {
        this.emit(eventsConfig.showGenre);
    }


    // callback functions
    showScoreChanged() {
        console.log(`${this.name} now has ${this.stats} points remaining`);
        logger.push(`${this.name} now has ${this.stats} points remaining`);
        console.log('------------------');
    }

    showScoreNotChanged() {
        console.log(`Penalty is too high than ${this.name}'s original score, remains with ${this.stats} points`);
        logger.push(`Penalty is too high than ${this.name}'s original score, remains with ${this.stats} points`);
        console.log('------------------');
    }

    showSportsGenre() {
        console.log(`Name: ${this.name}, Genre: ${this.sportsGenre} with the score of: ${this.stats}`);
        logger.push(`Name: ${this.name}, Genre: ${this.sportsGenre} with the score of: ${this.stats}`);
        console.log('------------------');
    }
};