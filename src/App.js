import React, { Component } from 'react';
import './Components/Header'
import './App.css';
// import Colors from './Components/Colors';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Description from './Components/Description';
import Table from './Components/Table'
import Simulation from './Components/Simulation';
import Footer from './Components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        {
            id: 0,
            code: '011',
            selected: 'not-selected',
            key: 'option'
        },
        {
            id: 1,
            code: '016',
            selected: 'not-selected',
            key: 'option'
        },
        {
            id: 2, 
            code: '017',
            selected: 'not-selected',
            key: 'option'
        },
        {
            id: 3,
            code: '018',
            selected: 'not-selected',
            key: 'option'
        }
    ], 
    packages: [
      {
        id: 0,
        value: 30,
        selected: 'not-selected',
        key: 'package'
      },
      {
        id: 1,
        value: 60,
        selected: 'not-selected',
        key: 'package'
      },
      {
        id: 2, 
        value: 120,
        selected: 'not-selected',
        key: 'package'
      }
    ],
    intro: 'intro',
    produto: 'produto',
    valores: 'valores',
    simulacao: 'simulacao'
    }
  }
  
  
  render() {
    return (
      <div className="App">
        <Header />
          <Intro />
          <Description />
          <Table />
          <Simulation options={this.state.options} packages={this.state.packages} />
          <Footer />
      </div>
    );
  }
}

export default App;
