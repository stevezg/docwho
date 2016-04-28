var React = require('react');
var ResultsTile = require('./results-tile');
const gridStyle =  { // initially any map object has left top corner at lat lng coordinates
  width: '25%',
  display: 'inline-block',
  float: 'right',
  maxHeight: '600px'
};

var ResultsGrid = React.createClass({
  propTypes: {
    doctors: React.PropTypes.array,
    doctorSelected: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      doctors: [],
    };
  },

  doctorSelected: function(doctor) {
    this.props.doctorSelected(doctor);
  },

  render: function() {
    let doctorSelected = this.doctorSelected;

    return (
      <div style={gridStyle} className="grid pre-scrollable">
        {this.props.doctors.map(function(doctor){
          return <ResultsTile doctor={doctor} doctorSelected={doctorSelected}/>;
        })}
      </div>
    );
  }
});

module.exports = ResultsGrid;
