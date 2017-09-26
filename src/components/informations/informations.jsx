import React from 'react';
import './style.scss';
import InformationsEnc from 'raw-loader!../../../data/informations.json.enc';
// import StudentData from 'raw-loader!./students.json';

import Person01 from 'raw-loader!../../../data/img/01.jpg.enc';
import Person02 from 'raw-loader!../../../data/img/02.jpg.enc';
import Person03 from 'raw-loader!../../../data/img/03.jpg.enc';
import Person04 from 'raw-loader!../../../data/img/04.jpg.enc';
import Person05 from 'raw-loader!../../../data/img/05.jpg.enc';
import Person06 from 'raw-loader!../../../data/img/06.jpg.enc';
import Person07 from 'raw-loader!../../../data/img/07.jpg.enc';
import Person08 from 'raw-loader!../../../data/img/08.jpg.enc';
import Person09 from 'raw-loader!../../../data/img/09.jpg.enc';
import Person10 from 'raw-loader!../../../data/img/10.jpg.enc';
import Person11 from 'raw-loader!../../../data/img/11.jpg.enc';
import Person12 from 'raw-loader!../../../data/img/12.jpg.enc';
import Person13 from 'raw-loader!../../../data/img/13.jpg.enc';

import Person from '../person/person';
import Account from '../account/account';
import Password from '../password/password';
var CryptoJS = require("crypto-js");

export default class Informations extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      // data: JSON.parse(StudentData),
      decrypted: false,
      message: 'Enter password to unlock.',
      img: {},
    };
  }

  decrypt = (password) => {
    console.log('password', password)
    // Decrypt
    try {
      var decrypted = CryptoJS.AES.decrypt(InformationsEnc, password);
      const data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      this.setState({'data': data})
      this.setState({'decrypted': true})

      // to use like
      // img={"data:image/jpeg;base64,"+ this.state.img[person.img] }

      this.setState({'img': {
        '01': CryptoJS.AES.decrypt(Person01, password).toString(CryptoJS.enc.Utf8),
        '02': CryptoJS.AES.decrypt(Person02, password).toString(CryptoJS.enc.Utf8),
        '03': CryptoJS.AES.decrypt(Person03, password).toString(CryptoJS.enc.Utf8),
        '04': CryptoJS.AES.decrypt(Person04, password).toString(CryptoJS.enc.Utf8),
        '05': CryptoJS.AES.decrypt(Person05, password).toString(CryptoJS.enc.Utf8),
        '06': CryptoJS.AES.decrypt(Person06, password).toString(CryptoJS.enc.Utf8),
        '07': CryptoJS.AES.decrypt(Person07, password).toString(CryptoJS.enc.Utf8),
        '08': CryptoJS.AES.decrypt(Person08, password).toString(CryptoJS.enc.Utf8),
        '09': CryptoJS.AES.decrypt(Person09, password).toString(CryptoJS.enc.Utf8),
        '10': CryptoJS.AES.decrypt(Person10, password).toString(CryptoJS.enc.Utf8),
        '11': CryptoJS.AES.decrypt(Person11, password).toString(CryptoJS.enc.Utf8),
        '12': CryptoJS.AES.decrypt(Person12, password).toString(CryptoJS.enc.Utf8),
        '13': CryptoJS.AES.decrypt(Person13, password).toString(CryptoJS.enc.Utf8),
      }})

    } catch (e) {
      console.log(e)
      this.setState({'message': 'Password wrong.'})
      this.setState({'decrypted': false})
    }
  }




  renderPW = () => (<Password decrypt={this.decrypt} message={this.state.message}/>)

  renderStudents = () => (
    <div>
      <h1>
        <span className="capitals">IAD</span>
        2017
      </h1>

      <ul>
        <li><a href="#students">Studierende</a></li>
        <li><a href="#account">Accounts</a></li>
        <li><a href="#teachers">Dozierende</a></li>
      </ul>

      <h2 id="students">Studierende</h2>
      {this.state.data.students.map((person, i) => <div key={i}>
        <Person
          gender={person.gender}
          name={person.name}
          surname={person.surname}
          address={person.address}
          zip={person.zip} city={person.city}
          region={person.region}
          mobile={person.mobile}
          email={person.email}
          birthday={person.birthday}
          slack={person.slack}
          slackID={person.slackID}
          slackTeam={this.state.data.slackteam}
          github={person.github}
          img={this.state.img[person.img]}
        />
      </div>)}
      <h2 id="account">Accounts</h2>
      {this.state.data.accounts.map((account, i) => <div key={i}>

        <Account
          title={account.title}
          info={account.info}
          url={account.url}
        />
      </div>)}

      <h2 id="teachers">Dozierende</h2>
      {this.state.data.teachers.map((person, i) => <div key={i}>
        <Person
          gender={person.gender}
          name={person.name}
          surname={person.surname}
          address={person.address}
          zip={person.zip} city={person.city}
          region={person.region}
          mobile={person.mobile}
          email={person.email}
          birthday={person.birthday}
          slack={person.slack}
          slackID={person.slackID}
          slackTeam={this.state.data.slackteam}
          github={person.github}
        />
      </div>)}
      <hr/>
    </div>
  )

  render() {
    return (
      <div>
        {!this.state.decrypted &&
          this.renderPW()
        }
        {this.state.data &&
          this.renderStudents()
        }
        <br/>
        <br/>
      </div>
    )
  }
}
