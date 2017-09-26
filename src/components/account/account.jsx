import React from 'react';
import './style.scss';

class Account extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    info: React.PropTypes.string.isRequired,
    url: React.PropTypes.string,
  };

  render() {

    return (
      <div>
        <hr />
        <h3>{this.props.title}</h3>
        {this.props.url && <p><a href={this.props.url} target="_blank">→ Login</a><br /></p>}


        <pre>
{this.props.info}
        </pre>

      </div>
    )
  }
}

export default Account;
