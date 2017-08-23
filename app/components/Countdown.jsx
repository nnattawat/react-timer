let React = require('react');
let Clock = require('Clock');
let CountdownForm = require('CountdownForm');

let Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  // called when props or state get updated
  componentDidUpdate: function(prevProps, prevState) {
    let {countdownStatus} = this.state;
    if (countdownStatus !== prevState.countdownStatus) {
      switch (countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },

  startTimer: function() {
    this.timer = setInterval( () => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      })
    }, 1000);
  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
  },

  render: function() {
    let { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
});

module.exports = Countdown;
