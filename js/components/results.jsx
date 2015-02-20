/** @jsx React.DOM */
'use strict';

var React = require('react');
var Item = require('./item.jsx');

var Results = React.createClass({

  render: function () {
    var items = this.props.results.items || [];

    return (
      <div className="row">
        <ul>
          {items.map(function (item)  {
            return <Item key={item.id} item={item} />;
          })}
        </ul>
      </div>
    );
  }
});

module.exports = Results;
