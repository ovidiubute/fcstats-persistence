"use strict";

var vogels = require('vogels');
var q = require('promised-io/promise');

vogels.AWS.config.update({region: "us-east-1"});

function createTables () {
  var deferred = q.defer();

  // Require all vogels defined models so we can create tables
  require('./src/models/team');
  require('./src/models/match');
  require('./src/models/league');

  // Create (missing) tables
  vogels.createTables({}, function (err) {
    if (err) {
      console.log('Error creating tables: ', err);
      deferred.reject(err);
    } else {
      console.log('Tables has been created');
      deferred.resolve();
    }
  });

  return deferred.promise;
}

module.exports = {
  createTables: createTables,
  models: require('./src/models/models')
};
