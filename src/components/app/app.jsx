import React from 'react';
import './style.scss';

import Informations from '../informations/informations'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Informations />
      </div>
    )
  }
}
