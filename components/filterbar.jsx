var React = require('react');
var TextField = require('./textfield');
var Button = require('./button');

var FilterBar = React.createClass({
  propTypes: {
    filterSelected: React.PropTypes.func,
  },

  handleClick: function(button) {
    this.props.filterSelected(button.props.text);
  },

  render: function() {
    console.log(this.props);

    var startOffset = this.props.offset + 1;
    var results = this.props.results;
    var totalCount = this.props.totalCount;

    return (

      <div className="filter-bar">
        <h1 className="name">Doctors in Los Angeles, CA</h1> <span className="results-label">Showing {startOffset}-{results} of {totalCount}</span>
          <div className="text-field-container">
            <Button onClick={this.handleClick} className="themed-button-filter"
              text="Insurance"/>
            <Button onClick={this.handleClick} className="themed-button-filter"
              text="Rating"/>
            <Button onClick={this.handleClick} className="themed-button-filter"
              text="Gender"/>
          </div>
        <div className="separator"/>
      </div>


    );
  }
});

module.exports = FilterBar;
