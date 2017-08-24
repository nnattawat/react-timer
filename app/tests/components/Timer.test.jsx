let React     = require('react');
let ReactDOM  = require('react-dom');
let expect    = require('expect');
let $         = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    it('should start timing', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Timer/>);
      countdown.handleStatusChange('started');

      setTimeout(() => {
       expect(countdown.state.count).toBe(1);
       done();
      }, 1001);
    });

    it('should pause countdown on paused status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Timer/>);
      countdown.handleStatusChange('started');

      setTimeout(() => {
        countdown.handleStatusChange('paused');
        expect(countdown.state.count).toBe(1);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should clear countdown on stopped status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Timer/>);
      countdown.handleStatusChange('started');

      setTimeout(() => {
        countdown.handleStatusChange('stopped');
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
