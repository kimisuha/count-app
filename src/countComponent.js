import React, { Component } from 'react';
import { connect } from 'react-redux';

class CountComponent extends Component {
    componentDidMount(){}

    handleAdd(){
        this.props.add();
    }

    handleDivide(){
        this.props.divide();
    }

    render() {
        return (
            <div>
                <h1>count app</h1>
                <p>number: {this.props.number}</p>
                

                <button onClick={() => this.handleAdd()}> add </button>
                <button onClick={() => this.handleDivide()}> divide </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        number: state.number
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch({ type: "ADD" }),
        divide: () => dispatch({ type: "DIVIDE" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountComponent);

