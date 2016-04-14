var React = require('react');
var SpecialityTile = require('./speciality-tile');

var SpecialityTile = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },

  render: function() {
    var image_path = this.props.name.replace(/\s/g, "-").toLowerCase();
    var style = {
      backgroundImage: 'url(' + '../images/specialities/' + image_path + '.png)',
    };

    var link = "./specialities/" + image_path;

    return (
      <a href={link}>
        <div className="speciality-tile"
                 style={style}>
          <h2 className="speciality-name-title">{this.props.name}</h2>
        </div>
      </a>
    );
  }
});

module.exports = SpecialityTile;
