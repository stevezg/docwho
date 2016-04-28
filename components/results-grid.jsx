var React = require('react');
var ResultsTile = require('./results-tile');
const gridStyle =  { // initially any map object has left top corner at lat lng coordinates
  width: '25%',
  display: 'inline-block',
  float: 'right',
  maxHeight: '500px'
};

var ResultsGrid = React.createClass({
  propTypes: {
    doctors: React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      doctors: [],
    };
  },

  render: function() {
    // console.log(this.props.style);
    return (
      <div style={gridStyle} className="grid pre-scrollable">
        {this.props.doctors.map(function(doctor){
          return <ResultsTile doctor={doctor}/>;
        })}
      </div>
    );
  }
});

module.exports = ResultsGrid;
