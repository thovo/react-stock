import React, { Component } from 'react';
import {connect} from 'react-redux';
import './DataTable.scss';
import {modifyDataAction} from "./actions/allActions"
import {simpleAction} from "./actions/simpleAction";

class DataCell extends Component  {
    handleInputChange = (event) => {
        this.props.onInputChange(this.props.index, event.target.value, this.props.name);
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

class DataTable extends Component  {

    handleInputChange = (index, value, name) => {
        this.props.modifyDataAction(index, value, name);
    };

    render() {
        return (
            <section className="data-table">
                <h2>Tableau de données</h2>
                <div className="row first-row">
                    <div className="cell">Index</div>
                    {
                        this.props.index.map((value, index) => {
                            return <DataCell value={value} key={index}  editable={false}/>;
                        })
                    }
                </div>
                <div className="row second-row">
                    <div className="cell">CAC40</div>
                    {
                        this.props.cac40.map((value, index) => {
                            return <DataCell value={value} key={index} index={index} editable={true} onInputChange={this.handleInputChange} name="cac40"/>;
                        })
                    }
                </div>
                <div className="row third-row">
                    <div className="cell">NASDAQ</div>
                    {
                        this.props.nasdaq.map((value, index) => {
                            return <DataCell value={value} key={index} index={index} editable={true} onInputChange={this.handleInputChange} name="nasdaq"/> ;
                        })
                    }
                </div>
            </section>
        );
    };
};

const mapStateToProps = state => {
    return {
        index: state.simpleReducer.index,
        cac40: state.simpleReducer.cac40,
        nasdaq: state.simpleReducer.nasdaq,
    }
};

const mapDispatchToProps = dispatch => ({
    modifyDataAction: (index, value, name) => dispatch(modifyDataAction(index, value, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
