var React = require('react');
var TextField = require('./textfield');
var Button = require('./button');

var TopBar = React.createClass({
  render: function() {
    return (
      <div className="topbar">
        <div className="header-content">
          <h1 className="name">DocWho</h1>
          <div className="text-field-container">
            <TextField className="themed-text-field"
                       placeholder="Search"
                       icon_url="../images/search.png"/>
            <TextField className="themed-text-field"
                       placeholder="Location"/>
          </div>
          <Button/>
        </div>
        <div className="separator"/>
      </div>
    );
  }
});

module.exports = TopBar;
