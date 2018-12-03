import React, {Component} from 'react';
import './App.scss';
import DataTable from './DataTable';
import {connect} from 'react-redux';
import {fetchDataAction} from './actions/allActions';
import LineChartContainer from './containers/LineChartContainer';

class App extends Component {

    componentDidMount() {
        this.props.fetchDataAction();

        // this.interval = setInterval(this.props.fetchDataAction, 1000);
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    render() {
        return (
            <div className="stock-application">
                <header className="app-header">
                    <h1>CAC40 et NASDAQ</h1>
                </header>
                <div className="container">
                    <LineChartContainer/>
                    <DataTable/>
                </div>
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
