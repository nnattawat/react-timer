let React = require('react');
let { Link, IndexLink } = require('react-router');

let Navigation = () => {
  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>
            Timer
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            <IndexLink to="/" activeClassName="active-link">Count Down</IndexLink>
          </li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <ul className='menu'>
          <li className='menu-text'>
            Created by <a href="https://github.com/nnattawat/">nnattawat</a>
          </li>
        </ul>
      </div>
    </div>
  )

};

module.exports = Navigation;
