let React     = require('react');
let ReactDOM  = require('react-dom');
let expect    = require('expect');
let $         = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    // Adding done argument to tell Mocha that it's async
    it('should set state', () => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(2);

      expect(countdown.state.count).toBe(2);
      expect(countdown.state.countdownStatus).toBe('started');
    });

    it('should start counting down', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(2);

      setTimeout(() => {
       expect(countdown.state.count).toBe(1);
       done();
      }, 1001);
    });

    it('should not set count to < 0', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 2001);
    });

    it('should pause countdown on paused status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should clear countdown on stopped status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
