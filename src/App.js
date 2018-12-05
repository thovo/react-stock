import React, {Component} from 'react';
import './App.scss';
import DataTable from './components/DataTable/DataTable';
import {connect} from 'react-redux';
import {fetchDataAction} from './actions/allActions';
import LineChartContainer from './containers/LineChartContainer';

class App extends Component {

    componentDidMount() {
        this.props.fetchDataAction(20);
        this.handleSetInterval();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleSetInterval () {
        this.interval = setInterval(() => {
             if(!this.props.pause) this.props.fetchDataAction(1);
        }, 1000);
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
    return {
        pause: state.mainReducer.pause
    }
};

const mapDispatchToProps = dispatch => ({
    fetchDataAction: (count) => dispatch(fetchDataAction(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
