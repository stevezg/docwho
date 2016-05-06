var React = require('react');
var TextField = require('./textfield');
var Button = require('./button');

var FilterBar = React.createClass({
  render: function() {
    console.log(this.props);

    var startOffset = this.props.offset + 1;
    var results = this.props.results;
    var totalCount = this.props.totalCount;

    return (

      <div className="filter-bar">
        <h1 className="name">Doctors in Los Angeles, CA</h1> <span className="results-label">Showing {startOffset}-{results} of {totalCount}</span>
        <form action="/search" method="get" enctype="multipart/form-data">
          <div className="text-field-container">
            <Button className="themed-button-filter"
              text="Insurance"/>
            <Button className="themed-button-filter"
              text="Rating"/>
            <Button className="themed-button-filter"
              text="Gender"/>
          </div>
        </form>
        <div className="separator"/>
      </div>


    );
  }
});

module.exports = FilterBar;
