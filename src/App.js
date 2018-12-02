import React, { Component } from 'react';
import './App.scss';
import DataTable from './DataTable';
import LineChart from './components/LineChart';
import apiURL from './environnment';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';

class App extends Component {
  constructor(props) {
    super(props);
    // Display an array of data of CAC40 et NASDAG
    this.state = {
        index: [],
        cac40: [],
        nasdaq: [],
        chartData: []
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
      const chartData = data;
      this.setState({index, cac40, nasdaq, chartData});
    });
  }

  simpleAction = (event) => {
    console.log(event);
    this.props.simpleAction();
  }
  render() {
    return (
      <div className="stock-application">
        <header className="app-header">
          <h1>CAC40 et NASDAQ</h1>
          <div id="graphic"></div>
          <LineChart data={[5,10,1,3]} size={[500,500]} chartData={this.state.chartData}/>
          <DataTable data={this.state}></DataTable>
          <button onClick={this.simpleAction}>Test redux action</button>
          <pre>
          {
            JSON.stringify(this.props)
          }
          </pre>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
