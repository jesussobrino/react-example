/** @jsx React.DOM */
'use strict';

var React = require('react');
var SearchStore = require('../stores/searchStore');
var Header = require('./header.jsx');
var Search = require('./search.jsx');
var Results = require('./results.jsx');

var App = React.createClass({

  getInitialState: function () {
    return {
      results: SearchStore.getResults()
    };
  },

  componentDidMount: function () {
    SearchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    SearchStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var results = this.state && this.state.results ? this.state.results : {};

    return (
      <div className="container">
        <Header title="Search GitHub" />
        <Search />
        <Results results={results} />
      </div>
    );
  },

  _onChange: function () {
    this.setState({results: SearchStore.getResults()});
  }

});

module.exports = App;
