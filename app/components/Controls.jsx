let React = require('react');

let Controls = React.createClass({
  // Define properties
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus)
    }
  },

  renderStartStopButton: function() {
    let {countdownStatus} = this.props;

    if (countdownStatus == 'started') {
      return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
    } else if (countdownStatus == 'paused') {
      return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
    }
  },

  render: function() {
    return (
      <div className="controls">
        {this.renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
