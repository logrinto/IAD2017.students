import React from 'react';
import './style.scss';

class Account extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    info: React.PropTypes.string.isRequired,
  };

  render() {

    return (
      <div>
        <hr />
        <h3>{this.props.title}</h3>
        <pre>
{this.props.info}
        </pre>

      </div>
    )
  }
}

export default Account;
