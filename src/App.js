import React, { Component } from 'react';
import './App.scss';
import BarChart from './BarChart';
import DataTable from './DataTable';
import apiURL from './environnment';

class App extends Component {
  constructor(props) {
    super(props);
    // Display an array of data of CAC40 et NASDAG
    this.state = {
        index: [],
        cac40: [],
        nasdaq: []
    };
  }
  componentDidMount() {
    fetch(apiURL).then(results => results.json()).then(data => {
      const index = [];
      const cac40 = [];
      const nasdaq = [];
      data.forEach(d => {
        index.push(d.index);
        cac40.push(d.stocks.CAC40);
        nasdaq.push(d.stocks.NASDAQ);
      });
      this.setState({index, cac40, nasdaq});
    });
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
