var React = require('react');
var SpecialityTile = require('./speciality-tile');

var SpecialityGrid = React.createClass({
  propTypes: {
    specialities: React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      specialities: [],
    };
  },

  render: function() {
    return (
      <div className="grid">
        {this.props.specialities.map(function(speciality){
          return <SpecialityTile name={speciality}/>;
        })}
      </div>
    );
  }
});

module.exports = SpecialityGrid;
