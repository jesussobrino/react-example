'use strict';

var React = require('react');
var App = require('./components/app.jsx');

React.render(
  <App />,
  document.querySelector('[data-js="app"]')
);

