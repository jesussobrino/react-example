/** @jsx React.DOM */
'use strict';

var React = require('react');

var Item = React.createClass({

  render: function () {
    var item = this.props.item;
    var owner = item.owner || {};

    return (
      <li>
        <div className="row">
          <div className="col-xs-2 text-right">
            <img src={owner.avatar_url} width="72" height="72"></img>
          </div>
          <div className="col-xs-10">
            <h3>{item.name}</h3>
            <p><strong>{item.stargazers_count} stars</strong></p>
            <p><a href={item.homepage}>{item.homepage}</a></p>
            <p>{item.git_url}</p>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = Item;
