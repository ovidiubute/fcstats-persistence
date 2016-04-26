"use strict";

var vogels = require('vogels');
var TeamModel = require('fcstats-models').TeamModel;

var Team = vogels.define('Team', {
  hashKey: 'name',

  // add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,

  schema: TeamModel.getSchema()
});

module.exports = Team;
