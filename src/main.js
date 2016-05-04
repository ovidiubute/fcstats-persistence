"use strict";

var q = require('promised-io/promise');
var loki = require('lokijs');

function createDatabase(fileName) {
  var deferred = q.defer();

  process.nextTick(() => {
    deferred.resolve(new loki(fileName));
  });

  return deferred.promise;
}

function createTable(db, tableName) {
  var deferred = q.defer();

  process.nextTick(() => {
    const table = db.addCollection(tableName);
    deferred.resolve(table);
  })

  return deferred.promise;
}

function insert(table, model) {
  var deferred = q.defer();

  process.nextTick(() => {
    deferred.resolve(table.insert(model.toJSON()));
  });

  return deferred.promise;
}

module.exports = {
  createTable: createTable,
  createDatabase: createDatabase,
  insert: insert
};
