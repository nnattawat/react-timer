let React = require('react');
let Clock = require('Clock');

let Countdown = () => {
  return (
    <div>
      <Clock totalSeconds={62}/>
    </div>
  )
};

module.exports = Countdown;
