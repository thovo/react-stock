import React, { Component } from 'react';
import './App.scss';
import BarChart from './BarChart';
import DataTable from './DataTable';

class App extends Component {
  constructor(props) {
    super(props);
    // Display an array of data of CAC40 et NASDAG
    this.state = {
        index: [1,2,3,4],
        cac40: [5,3,10,6],
        nasdaq: [7,8,4,6]
    };
  }
  render() {
    return (
      <div className="stock-application">
        <header className="app-header">
          <h1>CAC40 et NASDAQ</h1>
          <BarChart data={[5,10,1,3]} size={[500,500]} />
          <DataTable data={this.state}></DataTable>
        </header>
      </div>
    );
  }
}

export default App;
