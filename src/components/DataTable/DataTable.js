import React, {Component} from 'react';
import {connect} from 'react-redux';
import './DataTable.scss';
import {modifyDataAction, pauseCallData} from "../../actions/allActions"

class DataCell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.value !== nextProps.value) {
            this.setState({value: nextProps.value});
        }
    }

    handleInputBlur = () => {
        this.props.onInputChange(this.props.index, this.state.value, this.props.name)
    };

    handleInputFocus = () => {
        this.props.pauseCallData(true);
    };

    handleInputChange = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        if (this.props.editable)
            return <input type="number" value={this.state.value} onChange={this.handleInputChange}
                          onBlur={this.handleInputBlur} onFocus={this.handleInputFocus}/>;
        else
            return <span>{this.props.value}</span>;
    };
}

class DataTable extends Component {

    handleInputChange = (index, value, name) => {
        this.props.modifyDataAction(index, value, name);
    };

    render() {
        const {data} = this.props;
        return (
            <section className="data-table">
                <h2>Tableau de données</h2>
                <div className="row first-row header">
                    <div className="cell">Index</div>
                    <div className="cell">CAC40</div>
                    <div className="cell">NASDAQ</div>
                </div>
                {
                    data.map((d, index) => {
                        return (<div className="row" key={index}>
                            <div className="cell">
                                <DataCell value={d.index} key={index} editable={false}/>
                            </div>
                            <div className="cell">
                                <DataCell value={d.stocks.CAC40} key={index} index={d.index} editable={true}
                                          pauseCallData={this.props.pauseCallData}  onInputChange={this.handleInputChange} name="CAC40"/>
                            </div>
                            <div className="cell">
                                <DataCell value={d.stocks.NASDAQ} key={index} index={d.index} editable={true} pauseCallData={this.props.pauseCallData}
                                          onInputChange={this.handleInputChange} name="NASDAQ"/>
                            </div>
                        </div>);

                    })
                }
            </section>
        );
    };
};

const mapStateToProps = state => {
    return {
        data: state.mainReducer.data
    }
};

const mapDispatchToProps = dispatch => ({
    modifyDataAction: (index, value, name) => dispatch(modifyDataAction(index, value, name)),
    pauseCallData: (value) => dispatch(pauseCallData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
