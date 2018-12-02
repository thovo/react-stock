import React, { Component } from 'react';
import '../App.scss';
import './LineChart.scss';
import * as d3 from 'd3';

class AxisX extends Component {
    render() {
        const data = this.props.data;
        const margin = this.props.margin;
        const height = this.props.height - margin.top - margin.bottom;
        const width = this.props.width  - margin.left - margin.right;

        const x = d3.scale.linear()
          .range([0, width]);

        const xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom");

        x.domain(d3.extent(data, (d) => { return d.index; }));

        d3.select(".x").attr("transform", "translate(0," + height + ")").call(xAxis);
            return(
              <g className="x axis"></g>
            );
        }
}

class AxisY extends Component {
    render() {
        const data = this.props.data;
        console.log(data);
        const margin = this.props.margin;
        const height = this.props.height - margin.top - margin.bottom;
        // const width = this.props.width  - margin.left - margin.right;

        const y = d3.scale.linear()
        .range([height, 0]);

        const yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

        y.domain(d3.extent(data, (d) => { return d.value; }));

        d3.select(".y").call(yAxis)
        .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 2)
            .attr("dy", ".9em")
            .style("text-anchor", "end")
            .text("Valeur (€)");

        return(
            <g className="y axis"></g>
        );
    }
}

class Line extends Component {
    render() {
        const data = this.props.data;
        const margin = this.props.margin;
        const height = this.props.height - margin.top - margin.bottom;
        const width = this.props.width  - margin.left - margin.right;

        const x = d3.time.scale()
            .range([0, width]);

        const y = d3.scale.linear()
            .range([height, 0]);

        const line = d3.svg.line()
          .x((d) => { return x(d.index); })
          .y((d) => { return y(d.value); });

        data.forEach((d) => {
          x.domain(d3.extent(data, (d) => { return d.index; }));
          y.domain(d3.extent(data, (d) => { return d.value; }));
        });

        const newline = line(data);

        return(
          <path className="line" d={newline}></path>
        );
    }
}

class LineChart extends Component {

    constructor() {
        super();

        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
          chartWidth: 0,
          chartHeight: 0,
          x: NaN,
          y: NaN,
          dataCAC40: [],
          dataNASDAQ: [],
          margin: {}
        };
    }

    formatData(data) {
        const cac40 = [];
        const nasdaq = [];
        data.forEach(d => {
            const cac40Object = {
                index: d.index,
                value: d.stocks.CAC40
            };
            cac40.push(cac40Object);
            const nasdaqObject = {
                index: d.index,
                value: d.stocks.NASDAQ
            };
            nasdaq.push(nasdaqObject);
        });
        return {cac40, nasdaq};
    }

    prepareChart(chartData) {
        const margin = {top: 20, right: 20, bottom: 30, left: 50};
        const data = this.formatData(chartData);
        this.setState({
            chartWidth: 1400,
            chartHeight: 600,
            dataCAC40: data.cac40,
            dataNASDAQ: data.nasdaq,
            margin: margin
        });
    }

    componentDidMount() {
        this.prepareChart(this.props.chartData);
    }

    componentWillReceiveProps(nextProps) {
        this.prepareChart(nextProps.chartData);
    }

    render() {
        const width = this.state.chartWidth;
        const height = this.state.chartHeight;
        const margin = this.state.margin;
        const cac40 = this.state.dataCAC40;
        const nasdaq = this.state.dataNASDAQ;
        return(
        <div>
            <div id="chart">
                <svg height={height} width={width} >
                    <g transform="translate(50,20)">
                        <AxisX width={width} height={height} margin={margin} data={cac40}/>
                        <AxisY width={width} height={height} margin={margin} data={cac40}/>
                        <Line width={width} height={height} margin={margin} data={cac40}/>
                        <Line width={width} height={height} margin={margin} data={nasdaq}/>
                    </g>
                </svg>
            </div>
        </div>
        );
    }
}
export default LineChart;