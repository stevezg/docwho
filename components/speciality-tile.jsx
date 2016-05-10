var React = require('react');

var SpecialityTile = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },

  getInitialState: function () {
    return {hover: false};
  },

  mouseEnter: function () {
    this.setState({hover: true});
  },

  mouseLeave: function () {
    this.setState({hover: false});
  },

  render: function() {
    var image_path = this.props.name.replace(/\s/g, "-").toLowerCase();
    var style = {
      backgroundImage: 'url(' + '../images/specialities/' + image_path + '.png)',
    };
    var link = "./search?speciality_id=" + this.props.id;

    var overlay = this.state.hover ? <div className="speciality-tile-overlay"/> : undefined;

    return (
      <a href={link}>
        <div className="speciality-tile"
                 style={style}
                 onMouseEnter={this.mouseEnter}
                 onMouseLeave={this.mouseLeave}>
          <h2 className="speciality-name-title">{this.props.name}</h2>
          {{overlay}}
        </div>
      </a>
    );
  }
});

module.exports = SpecialityTile;
