var React = require('react');
var TextField = require('./textfield');
var Button = require('./button');

var TopBar = React.createClass({
  render: function() {
    return (
      <div className="topbar">
        <div className="header-content">
          <a href="/"><h1 className="name">DocWho</h1></a>
          <form action="/search" method="get" enctype="multipart/form-data">
              <div className="text-field-container">
                <TextField className="themed-text-field"
                                name="search"
                         placeholder="Search"
                            icon_url="../images/search.png"/>
                <TextField className="themed-text-field"
                                name="location"
                         placeholder="Location"
                  googleAutoComplete="true"
                         icon_url="https://cdn3.iconfinder.com/data/icons/stroke/53/Location-512.png"/>
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
