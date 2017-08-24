let React    = require('react');
let Clock    = require('Clock');
let Controls = require('Controls');

let Timer =  React.createClass({
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
      let {count} = this.state;

      let newCount = count + 1;

      this.setState({
        count: newCount
      });
    }, 1000);
  },

  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus
    })
  },

  render() {
    let {count, countdownStatus} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;
