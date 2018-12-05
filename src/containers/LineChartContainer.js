import React, {Component} from 'react';
import {connect} from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

class LineChartContainer extends Component {
    render() {
        return (
            <ResponsiveContainer width="90%" height={500}>
                <LineChart  data={this.props.data}
                            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="index">
                            <Label value="Index" offset={-15} position="insideBottomRight" />
                        </XAxis>
                        <YAxis label={{ value: 'Valeur (€)', angle: -90, position: 'left' }}/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend verticalAlign="bottom" height={36} offset={100}/>
                        <Line type="monotone" name="CAC40" dataKey="stocks.CAC40" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" name="NASDAQ" dataKey="stocks.NASDAQ" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

const mapStateToProps = state => {
    return {data: state.mainReducer.data}
};

export default connect(mapStateToProps)(LineChartContainer);