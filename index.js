"use strict";

/*
var Season = require('./src/season');
var lib = require('./src/main');
var _ = require('lodash');

lib.loadDatabase('../fcstats-dbimporter/out/fcstats0_4.json').then((db) => {
 
  var matches = Season.get(db.getCollection('matches')).findByLeague('E0');
  if (!matches.length) {
    return [];
  } else {
    let results = _.uniqWith(matches.map((match) => { return match.season }), _.isEqual);
    console.log(results);
  }
});
*/

module.exports = {
  lib: require('./src/main'),
  Match: require('./src/match')
};
