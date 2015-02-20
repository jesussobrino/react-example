/** @jsx React.DOM */
'use strict';

var React = require('react');
var Actions = require('../actions');

var Search = React.createClass({

  render: function () {
    return (
      <div className="row">
        <div className="col-xs-12">
          <input type="text" className="width-100" onKeyDown={this._onKeyDown}
            placeholder="Add something..."></input>
        </div>
      </div>
    );
  },

  _onKeyDown: function (e) {
    var val = e.currentTarget.value;

    if (e.keyCode === 13 && val) {
      Actions.search(val);
    }
  }

});

module.exports = Search;
