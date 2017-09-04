import React from 'react';
import './style.scss';

import Students from '../students/students'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Students />
      </div>
    )
  }
}
