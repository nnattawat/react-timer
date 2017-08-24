let React = require('react');

let Controls = React.createClass({
  // Define properties
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },

  renderStartStopButton: function() {
    let {countdownStatus} = this.props;

    if (countdownStatus == 'started') {
      return <button className="button secondary">Pause</button>
    } else if (countdownStatus == 'paused') {
      return <button className="button primary">Start</button>
    }
  },

  render: function() {
    return (
      <div className="controls">
        {this.renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
