/** @jsx React.DOM */
'use strict';

var React = require('react');

var Header = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h3>{this.props.title}</h3>
          <hr className="featurette-divider"></hr>
        </div>
      </div>
    );
  }

});

module.exports = Header;
