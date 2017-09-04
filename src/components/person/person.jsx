import React from 'react';
import './style.scss';

class Student extends React.Component {

  static propTypes = {
    gender: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    surname: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    zip: React.PropTypes.string.isRequired,
    city: React.PropTypes.string.isRequired,
    region: React.PropTypes.string.isRequired,
    mobile: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    birthday: React.PropTypes.string.isRequired,
    slack: React.PropTypes.string.isRequired,
    slackID: React.PropTypes.string.isRequired,
    slackTeam: React.PropTypes.string.isRequired,
    github: React.PropTypes.string.isRequired,
  };

  render() {

    return (
      <div>
        <hr />
        <h3>{this.props.name} {this.props.surname}</h3>
        <p>
          {this.props.address}<br />
          {this.props.zip} {this.props.city} ({this.props.region})<br />

          <a href={`tel:${this.props.mobile}`}>{this.props.mobile}</a><br />
          <a href={`mailto:${this.props.email}`}>{this.props.email}</a><br />

          Geburtstag: {this.props.birthday} <br />
          Github: <a href={`https://github.com/${this.props.github}/`}>{this.props.github}</a><br />
          slack: <a href={`slack://user?team=${this.props.slackTeam}&id=${this.props.slackID}`}>@{this.props.slack}</a><br />
        </p>
      </div>
    )
  }
}

export default Student;
