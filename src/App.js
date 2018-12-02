import React, {Component} from 'react';
import './App.scss';
import DataTable from './DataTable';
import {LineChart} from 'react-d3-components';
import {connect} from 'react-redux';
import {fetchDataAction} from './actions/allActions';

class App extends Component {

    componentDidMount() {
        this.props.fetchDataAction();

        this.interval = setInterval(this.props.fetchDataAction, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    formatData(data) {
        const result = [
            {
                label: 'CAC40',
                values: [{x: 0, y: 0}]
            },
            {
                label: 'NASDAQ',
                values: [{x: 0, y: 0}]
            }
        ];
        if (data && data.length > 0) {
            // reset data
            result[0].values = [];
            result[1].values = [];
            data.forEach(d => {
                const objectCAC40 = {
                    x: d.index,
                    y: d.stocks.CAC40
                };

                const objectNASDAQ = {
                    x: d.index,
                    y: d.stocks.NASDAQ
                };
                result[0].values.push(objectCAC40);
                result[1].values.push(objectNASDAQ);
            });
            return result;
        }

        return result;

    }

    render() {
        const chartData = this.formatData(this.props.chartData);

        return (
            <div className="stock-application">
                <header className="app-header">
                    <h1>CAC40 et NASDAQ</h1>
                    <LineChart data={chartData}
                               width={1200}
                               height={600}
                               margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
                    <DataTable/>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {chartData: state.simpleReducer.chartData}
};

const mapDispatchToProps = dispatch => ({
    fetchDataAction: () => dispatch(fetchDataAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
