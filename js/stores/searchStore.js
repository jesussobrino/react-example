'use strict';

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var assign = require('object-assign');

var request = require('../request');
var AppDispatcher = require('../appDispatcher');
var Constants = require('../constants');
var CHANGE_EVENT = 'change';
var _results = [];

var SearchStore = assign({}, EventEmitter.prototype, {

  search: function (query) {
    request({
      method: 'GET',
      url: 'http://api.github.com/search/repositories',
      query: { q: query }
    }).then(function (res) {

      try {
        _results = JSON.parse(res.data);
      } catch (err) {
        _results = [];
      } finally {
        SearchStore.emitChange();
      }

    }, function (err) {
      SearchStore.emitChange();
    });
  },

  getResults: function () {
    return _results;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.off(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function (action) {
  var result;

  switch (action.actionType) {
  case Constants.SEARCH:
    SearchStore.search(action.text);
    break;
  }
});

module.exports = SearchStore;
