var React = require('react');
var Home = require('./home');
var Search = require('./search')

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var RouteHandler = Router.RouteHandler;

React.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="search" component={Search}/>
  </Router>,
  document.getElementById('content')
);
