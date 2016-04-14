var React = require('react');
var TextField = require('./textfield');
var Button = require('./button');

var TopBar = React.createClass({
  render: function() {
    return (
      <div className="topbar">
        <div className="header-content">
          <h1 className="name">DocWho</h1>
          <form action="" method="post" enctype="multipart/form-data">
              <div className="text-field-container">
                <TextField className="themed-text-field"
                                name="search"
                         placeholder="Search"
                            icon_url="../images/search.png"/>
                <TextField className="themed-text-field"
                                name="location"
                         placeholder="Location"/>
              </div>
            <Button className="themed-button-topbar"
                         text="Search"/>
          </form>
        </div>
        <div className="separator"/>
      </div>
    );
  }
});

module.exports = TopBar;
