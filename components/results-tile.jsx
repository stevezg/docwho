var React = require('react');
var GoogleMap = require('./googlemap');
var ResultsTile = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },
  handleClick: function() {
    GoogleMap.showMarker(this.props.doctor.practice);
  },
  render: function() {
    // var image_path = this.props.name.replace(/\s/g, "-").toLowerCase();
    // var style = {
    //   backgroundImage: 'url(' + '../images/specialities/' + image_path + '.png)',
    // };
    // var link = "./search?speciality_id=" + this.props.id;
    var cardStyle = {
      'height': '140px',
      'borderTopStyle': 'solid',
      'borderLeftStyle': 'solid',
      'borderBottomStyle': 'solid',
      'borderColor': 'lightgrey',
      'borderWidth': '1.5px'
    }
    return (
      <div onClick={this.handleClick} className="profile-card" style={cardStyle}>
        <div className="col-md-8 col-md-8">
          <h3>{this.props.doctor.name}</h3>
        </div>
        <div className="col-md-4 col-md-4">
          <i className="fa fa-star" style={{marginTop: '20px', color:'#FF4646'}} aria-hidden="true"></i>
          <i className="fa fa-star" style={{marginTop: '20px', color:'#FF4646'}} aria-hidden="true"></i>
          <i className="fa fa-star" style={{marginTop: '20px', color:'#FF4646'}} aria-hidden="true"></i>
          <i className="fa fa-star" style={{marginTop: '20px', color:'#FF4646'}} aria-hidden="true"></i>
          <i className="fa fa-star" style={{marginTop: '20px', color:'#FF4646'}} aria-hidden="true"></i>
        </div>
        <div className="col-md-12 col-md-12">
          <p>{this.props.doctor.speciality}</p>
        </div>
      </div>
    );
  }
});

module.exports = ResultsTile;
