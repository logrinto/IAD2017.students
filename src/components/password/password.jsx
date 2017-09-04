import React from 'react';
import './style.scss';

export default class Password extends React.Component {

  render() {

    return (
      <div className="password-component">
        <div className="password-form">
          <div className="password-instructions">
            <h2>Protected Page</h2>
            <p>Enter password to unlock</p>
          </div>

          <form id="password-form" action="#" method="post">
            <input
              id="password-password"
              type="password"
              name="password"
              placeholder="password"
              autoFocus
            />

            <input
              type="submit"
              className="password-decrypt-button"
              value="decrypt"
            />
          </form>
        </div>
      </div>
    )
  }
}
