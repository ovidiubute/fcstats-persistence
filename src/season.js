"use strict";

const util = require('util');
const lokijs = require('lokijs');

function Season (collection) {
  this.coll = collection;
}

Season.prototype.findByLeague = function (leagueName) {
  return this.coll.find({
    'season.leagueName': {'$eq': leagueName}
  });
}

module.exports = {
  get: (collection) => {
    return new Season(collection);
  }
}

