"use strict";

var vogels = require('vogels');
var LeagueModel = require('fcstats-models').LeagueModel;

var League = vogels.define('League', {
  hashKey: 'name',

  // add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,

  schema: LeagueModel.getSchema()
});

module.exports = League;
