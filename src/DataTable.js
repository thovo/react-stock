import React, { Component } from 'react';
import './DataTable.scss';

class DataCell extends Component  {

    constructor(props) {
        super(props);
    }

    handleInputChange(event) {
        const value = event.target.value;
        // this.setState({value: value});
        console.log(value);
    }

    render() {
        return (
            <div className="cell">
                { this.props.editable ?
                    (
                        <input type="text" value={this.props.value} onChange={this.handleInputChange}/>
                    ) : (
                        <span>{this.props.value}</span>
                    )
                }
            </div>
        );
    };
};

export default class DataTable extends Component  {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="data-table">
                <h2>Tableau de données</h2>
                <div className="row first-row">
                    <div className="cell">Index</div>
                    {
                        this.props.data.index.map((value, index) => {
                            return <DataCell value={value} key={index} editable={false}/>;
                        })
                    }
                </div>
                <div className="row second-row">
                    <div className="cell">CAC40</div>
                    {
                        this.props.data.cac40.map((value, index) => {
                            return <DataCell value={value} key={index} editable={true}/>;
                        })
                    }
                </div>
                <div className="row third-row">
                    <div className="cell">NASDAQ</div>
                    {
                        this.props.data.nasdaq.map((value, index) => {
                            return <DataCell value={value} key={index} editable={true}/> ;
                        })
                    }
                </div>
            </section>
        );
    };
};
