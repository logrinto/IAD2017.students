import React from 'react';
import './style.scss';
import StudentData from 'raw-loader!./students.json';
import Person from '../person/person';
import Password from '../password/password';

export default class Students extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(StudentData)
    };
  }


  render() {
    if (!this.state.data || !this.state.data.students) {
      return null;
    }

    return (
      <div>
        <h1><span className="capitals">IAD</span> 2017</h1>
        <h2>Studierende</h2>
        <Password />
        {this.state.data.students.map((student, i) =>
            <div key={i}>
                <Person
                  gender={student.gender}
                  name={student.name}
                  surname={student.surname}
                  address={student.address}
                  zip={student.zip}
                  city={student.city}
                  region={student.region}
                  mobile={student.mobile}
                  email={student.email}
                  birthday={student.birthday}
                  slack={student.slack}
                  slackID={student.slackID}
                  slackTeam={this.state.data.slackteam}
                  github={student.github}
                />
            </div>
        )}
        <hr />
        <br />
        <br />
      </div>
    )
  }
}
