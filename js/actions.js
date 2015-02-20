'use strict';

var AppDispatcher = require('./appDispatcher');
var Constants = require('./constants');

var Actions = {
  search: function (query) {
    AppDispatcher.dispatch({actionType: Constants.SEARCH, text: query});
  }
};

module.exports = Actions;
