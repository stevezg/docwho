var React = require('react');
var TextField = require('./textfield');
var Select = require('react-select');
var Filter = require('./filter');

var FilterBar = React.createClass({
  propTypes: {
    filterSelected: React.PropTypes.func,
  },

  handleClick: function(button) {
    this.props.filterSelected(button.props.text);
  },

  render: function() {
    return (
      <div className="filter-bar">
        <h3 className="filter-header">Filter:</h3>
          <Filter onClick={this.handleClick} className="filter"
            text="Insurance"/>
          <Filter onClick={this.handleClick} className="filter"
            text="Rating"/>
          <Filter onClick={this.handleClick} className="filter"
            text="Gender"/>
        <div className="separator"/>
      </div>
    );
  }
});

module.exports = FilterBar;
