"use strict";

var vogels = require('vogels');
var MatchModel = require('fcstats-models').MatchModel;

var Match = vogels.define('Match', {
  hashKey: 'matchId',

  timestamps: true,

  schema: MatchModel.getSchema(),

  tableName: 'matches'
});

module.exports = Match;
