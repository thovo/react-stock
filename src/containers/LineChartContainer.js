import React, {Component} from 'react';
import {connect} from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class LineChartContainer extends Component {
    render() {
        return (
            <ResponsiveContainer width="90%" height={500}>
                <LineChart  data={this.props.chartData}
                            margin={{top: 10, bottom: 50, left: 50, right: 10}}>
                        <XAxis dataKey="index"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="stocks.CAC40" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="stocks.NASDAQ" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

const mapStateToProps = state => {
    return {chartData: state.simpleReducer.chartData}
};

export default connect(mapStateToProps)(LineChartContainer);