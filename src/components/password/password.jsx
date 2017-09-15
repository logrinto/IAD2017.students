import React from 'react';
import './style.scss';

export default class Password extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      pw: ''
    };
  }

  handleClick = () => {
     this.props.decrypt(this.state.pw);
   }

   handleChange = (event) => {
     this.setState({pw: event.target.value});
   }

  render() {

    return (
      <div className="password-component">
        <div className="password-form">
          <div className="password-instructions">
            <h2>Protected Page</h2>
            <p>{this.props.message}</p>
          </div>

            <input
              id="password-password"
              type="password"
              name="password"
              placeholder="password"
              autoFocus
              onKeyPress={(e) => {(e.key === 'Enter' ? this.handleClick() : null)}}
              onChange={this.handleChange}
              value={this.state.pw}
            />

          <button
              className="password-decrypt-button"
              onClick={this.handleClick}
            >
            decrypt
          </button>
        </div>
      </div>
    )
  }
}
