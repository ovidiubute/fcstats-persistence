const assert = require('assert');
const main = require('../src/main');
const MatchModel = require('fcstats-models').MatchModel;

describe('main', function () {
  describe('#createDatabase', function () {
    it('should create a physical DB', function () {
      return main.createDatabase('football.json').then(function (db) {
        assert.equal(db.filename, 'football.json');
        assert.deepEqual(db.collections, []);
      })
    })
  });

  describe('#createTable', function () {
    it('should create a collection inside a DB', function () {
      return main.createDatabase('football.json').then(function (db) {
        return main.createTable(db, 'matches').then(function (collection) {
          assert.equal(collection.name, 'matches');
          assert.deepEqual(collection.data, []);
        })
      })
    })
  });

  describe('#insert', function () {
    it('should add a Model to a collection inside a DB', function () {
      return main.createDatabase('football.json').then(function (db) {
        return main.createTable(db, 'matches');
      }).then(function (collection) {
        return main.insert(collection, new MatchModel({name: 'Joi', matchId: 3004}));
      }).then(function (result) {
        assert.equal(result.$loki, 1);
        assert.equal(result.name, 'Joi');
        assert.equal(result.matchId, 3004);
      });
    })
  })
})
