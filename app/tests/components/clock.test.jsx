let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('#formatSeconds', () => {
    it('should format seconds', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      expect(clock.formatSeconds(650)).toBe('10:50');
    });

    it('should format seconds into 2 digits', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      expect(clock.formatSeconds(61)).toBe('01:01');
    });
  });

  describe('#render', () => {
    it('should render clock output', () => {
      let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      let $el = $(ReactDOM.findDOMNode(clock));
      let actualText = $el.find('.clock-text').text();
      expect(actualText).toBe("01:02");
    });
  });
});
