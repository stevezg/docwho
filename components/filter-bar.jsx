var React = require('react');
var TextField = require('./textfield');
var Select = require('react-select');
var Filter = require('./filter');

import theme from '../styles/react-select.css';


var genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
];

var ratingOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' }
];

var currentSelectedFilters = {
  insurance: null,
  gender: null,
  rating: null
}

var FilterBar = React.createClass({
  propTypes: {
    filterSelected: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      insurances: [],
    };
  },

  handleClick: function(button) {
    this.props.filterSelected(button.props.text);
  },

  onInsuranceChange: function(val) {
    currentSelectedFilters.insurance = val;
    this.props.filterSelected(currentSelectedFilters);
  },

  onGenderChange: function(val) {
    currentSelectedFilters.gender = val;
    this.props.filterSelected(currentSelectedFilters);
  },

  onRatingChange: function(val) {
    currentSelectedFilters.rating = val;
    this.props.filterSelected(currentSelectedFilters);
  },

  clearFilters: function() {
    currentSelectedFilters.insurance = null;
    currentSelectedFilters.gender = null;
    currentSelectedFilters.rating = null;
    this.props.filterSelected(currentSelectedFilters);
  },

  getInsuranceOptions: function() {
    var options = [];
    this.props.insurances.map(function(insurance){
      var option = {};
      option.value = insurance.id;
      option.label = insurance.name;
      options.push(option);
    });
    return options;
  },


  render: function() {
    return (
      <div className="filter-bar">
        <h3 className="filter-header">Filter:</h3>
          <Select
            className="filter-select"
              name="form-field-name"
              options={this.getInsuranceOptions()}
              onChange={this.onInsuranceChange}
              placeholder="Preferred Insurance"
              value={this.props.currentSelectedFilters.insurance}
          />
          <Select
            className="filter-select"
              name="form-field-name"
              options={genderOptions}
              onChange={this.onGenderChange}
              placeholder="Gender"
              value={this.props.currentSelectedFilters.gender}
          />
          <Select
            className="filter-select"
              name="form-field-name"
              options={ratingOptions}
              onChange={this.onRatingChange}
              placeholder="Minimum Rating"
              value={this.props.currentSelectedFilters.rating}
          />
        <button onClick={this.clearFilters} className="filter-header">Clear</button>
        <div className="separator"/>
      </div>
    );
  }
});

module.exports = FilterBar;
