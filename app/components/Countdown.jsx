let React         = require('react');
let Clock         = require('Clock');
let CountdownForm = require('CountdownForm');
let Controls      = require('Controls');

let Countdown = React.createClass({
  getInitialState() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  // called when props or state get updated
  componentDidUpdate(prevProps, prevState) {
    let {countdownStatus} = this.state;
    if (countdownStatus !== prevState.countdownStatus) {
      switch (countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          this.clearTimer();
          break;
      }
    }
  },

  componentWillUpdate(nextProps, nextState) {
  },

  // called before mount so there is no DOM yet
  componentWillMount() {
  },

  // called right after component is mount. DOM is availble
  componentWillMount() {
  },

  // called before unmount
  componentWillUnmount() {
    this.clearTimer();
  },

  clearTimer() {
    clearInterval(this.timer);
    this.timer = undefined
  },

  startTimer() {
    this.timer = setInterval( () => {
      let {count, countdownStatus} = this.state;

      let newCount = count - 1;

      if (newCount <= 0) {
        newCount = 0;
        countdownStatus = 'stopped'
      }

      this.setState({
        count: newCount,
        countdownStatus: countdownStatus
      });
    }, 1000);
  },

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },

  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus
    })
  },

  renderFormOrControls() {
    let {countdownStatus} = this.state;
    switch (countdownStatus) {
      case 'stopped':
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
        break;
      default:
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
    }
  },

  render() {
    let { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        {this.renderFormOrControls()}
      </div>
    )
  }
});

module.exports = Countdown;
