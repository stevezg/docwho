var React = require('react');

var ResultsTile = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },

  render: function() {
    // var image_path = this.props.name.replace(/\s/g, "-").toLowerCase();
    // var style = {
    //   backgroundImage: 'url(' + '../images/specialities/' + image_path + '.png)',
    // };
    // var link = "./search?speciality_id=" + this.props.id;
    // console.log(this.props.name);
    var cardStyle = {
      'height': '140px',
      'borderTopStyle': 'solid',
      'borderLeftStyle': 'solid',
      'borderBottomStyle': 'solid',
      'borderColor': 'lightgrey',
      'borderWidth': '1.5px'
    }
    return (
      // <a href="">
        // <div className="speciality-tile">
        //   <h2>{this.props.name}</h2>
        // </div>
      // </a>
      <div class="profile-card" style={cardStyle}>
        <div class="col-md-4 col-md-4">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
});

module.exports = ResultsTile;
