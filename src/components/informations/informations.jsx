import React from "react";
import "./style.scss";
import InformationsEnc from "raw-loader!../../../data/informations.json.enc";
// import StudentData from 'raw-loader!./students.json';

import Person2017_01 from "raw-loader!../../../data/img/2017_01.jpg.enc";
import Person2017_02 from "raw-loader!../../../data/img/2017_02.jpg.enc";
import Person2017_03 from "raw-loader!../../../data/img/2017_03.jpg.enc";
import Person2017_04 from "raw-loader!../../../data/img/2017_04.jpg.enc";
import Person2017_05 from "raw-loader!../../../data/img/2017_05.jpg.enc";
import Person2017_06 from "raw-loader!../../../data/img/2017_06.jpg.enc";
import Person2017_07 from "raw-loader!../../../data/img/2017_07.jpg.enc";
import Person2017_08 from "raw-loader!../../../data/img/2017_08.jpg.enc";
import Person2017_09 from "raw-loader!../../../data/img/2017_09.jpg.enc";
import Person2017_10 from "raw-loader!../../../data/img/2017_10.jpg.enc";
import Person2017_11 from "raw-loader!../../../data/img/2017_11.jpg.enc";
import Person2017_12 from "raw-loader!../../../data/img/2017_12.jpg.enc";
import Person2017_13 from "raw-loader!../../../data/img/2017_13.jpg.enc";

import Person2019_01 from "raw-loader!../../../data/img/2019_01.jpg.enc";
import Person2019_02 from "raw-loader!../../../data/img/2019_02.jpg.enc";
import Person2019_03 from "raw-loader!../../../data/img/2019_03.jpg.enc";
import Person2019_04 from "raw-loader!../../../data/img/2019_04.jpg.enc";
import Person2019_05 from "raw-loader!../../../data/img/2019_05.jpg.enc";
import Person2019_06 from "raw-loader!../../../data/img/2019_06.jpg.enc";
import Person2019_07 from "raw-loader!../../../data/img/2019_07.jpg.enc";
import Person2019_08 from "raw-loader!../../../data/img/2019_08.jpg.enc";
import Person2019_09 from "raw-loader!../../../data/img/2019_09.jpg.enc";
import Person2019_10 from "raw-loader!../../../data/img/2019_10.jpg.enc";
import Person2019_11 from "raw-loader!../../../data/img/2019_11.jpg.enc";
import Person2019_12 from "raw-loader!../../../data/img/2019_12.jpg.enc";
import Person2019_13 from "raw-loader!../../../data/img/2019_13.jpg.enc";
import Person2019_14 from "raw-loader!../../../data/img/2019_14.jpg.enc";
import Person2019_15 from "raw-loader!../../../data/img/2019_15.jpg.enc";

import Person from "../person/person";
import Account from "../account/account";
import Password from "../password/password";
var CryptoJS = require("crypto-js");

export default class Informations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      // data: JSON.parse(StudentData),
      decrypted: false,
      message: "Enter password to unlock.",
      img: {}
    };
  }

  decrypt = password => {
    console.log("password", password);
    // Decrypt
    try {
      var decrypted = CryptoJS.AES.decrypt(InformationsEnc, password);
      const data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      this.setState({ data: data });
      this.setState({ decrypted: true });

      // to use like
      // img={"data:image/jpeg;base64,"+ this.state.img[person.img] }

      this.setState({
        img: {
          "2017_01": CryptoJS.AES.decrypt(Person2017_01, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_02": CryptoJS.AES.decrypt(Person2017_02, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_03": CryptoJS.AES.decrypt(Person2017_03, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_04": CryptoJS.AES.decrypt(Person2017_04, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_05": CryptoJS.AES.decrypt(Person2017_05, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_06": CryptoJS.AES.decrypt(Person2017_06, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_07": CryptoJS.AES.decrypt(Person2017_07, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_08": CryptoJS.AES.decrypt(Person2017_08, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_09": CryptoJS.AES.decrypt(Person2017_09, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_10": CryptoJS.AES.decrypt(Person2017_10, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_11": CryptoJS.AES.decrypt(Person2017_11, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_12": CryptoJS.AES.decrypt(Person2017_12, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2017_13": CryptoJS.AES.decrypt(Person2017_13, password).toString(
            CryptoJS.enc.Utf8
          ),

          "2019_01": CryptoJS.AES.decrypt(Person2019_01, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_02": CryptoJS.AES.decrypt(Person2019_02, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_03": CryptoJS.AES.decrypt(Person2019_03, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_04": CryptoJS.AES.decrypt(Person2019_04, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_05": CryptoJS.AES.decrypt(Person2019_05, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_06": CryptoJS.AES.decrypt(Person2019_06, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_07": CryptoJS.AES.decrypt(Person2019_07, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_08": CryptoJS.AES.decrypt(Person2019_08, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_09": CryptoJS.AES.decrypt(Person2019_09, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_10": CryptoJS.AES.decrypt(Person2019_10, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_11": CryptoJS.AES.decrypt(Person2019_11, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_12": CryptoJS.AES.decrypt(Person2019_12, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_13": CryptoJS.AES.decrypt(Person2019_13, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_14": CryptoJS.AES.decrypt(Person2019_14, password).toString(
            CryptoJS.enc.Utf8
          ),
          "2019_15": CryptoJS.AES.decrypt(Person2019_15, password).toString(
            CryptoJS.enc.Utf8
          )
        }
      });
    } catch (e) {
      console.log(e);
      this.setState({ message: "Password wrong." });
      this.setState({ decrypted: false });
    }
  };

  renderPW = () => (
    <Password decrypt={this.decrypt} message={this.state.message} />
  );

  renderStudents = () => (
    <div>
      <h1>
        <span className="capitals">IAD</span>
      </h1>

      <ul>
        <li>
          <a href="#students2019">Studierende IAD2019</a>
        </li>
        <li>
          <a href="#students2017">Alumni IAD2017</a>
        </li>
        <li>
          <a href="#account">Accounts</a>
        </li>
        <li>
          <a href="#teachers">Dozierende</a>
        </li>
      </ul>

      <h2 id="students2019">Studierende IAD2019</h2>
      {this.state.data.studentsIAD2019.map((person, i) => (
        <div key={i}>
          <Person
            status={person.status}
            name={person.name}
            surname={person.surname}
            address={person.address}
            zip={person.zip}
            city={person.city}
            region={person.region}
            mobile={person.mobile}
            email={person.email}
            birthday={person.birthday}
            slack={person.slack}
            slackID={person.slackID}
            slackTeam={this.state.data.slackteam}
            github={person.github}
            company={person.company}
            img={this.state.img[person.img]}
          />
        </div>
      ))}

      <h2 id="students2017">Alumni IAD2017</h2>
      {this.state.data.studentsIAD2017.map((person, i) => (
        <div key={i}>
          <Person
            status={person.status}
            name={person.name}
            surname={person.surname}
            address={person.address}
            zip={person.zip}
            city={person.city}
            region={person.region}
            mobile={person.mobile}
            email={person.email}
            birthday={person.birthday}
            slack={person.slack}
            slackID={person.slackID}
            slackTeam={this.state.data.slackteam}
            github={person.github}
            company={person.company}
            img={this.state.img[person.img]}
          />
        </div>
      ))}
      <h2 id="account">Accounts</h2>
      {this.state.data.accounts.map((account, i) => (
        <div key={i}>
          <Account
            title={account.title}
            info={account.info}
            url={account.url}
          />
        </div>
      ))}

      <h2 id="teachers">Dozierende</h2>
      {this.state.data.teachers.map((person, i) => (
        <div key={i}>
          <Person
            name={person.name}
            surname={person.surname}
            address={person.address}
            zip={person.zip}
            city={person.city}
            region={person.region}
            mobile={person.mobile}
            email={person.email}
            birthday={person.birthday}
            slack={person.slack}
            slackID={person.slackID}
            slackTeam={this.state.data.slackteam}
            company={person.company}
            github={person.github}
          />
        </div>
      ))}
      <hr />
    </div>
  );

  render() {
    return (
      <div>
        {!this.state.decrypted && this.renderPW()}
        {this.state.data && this.renderStudents()}
        <br />
        <br />
      </div>
    );
  }
}
