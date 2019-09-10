import React, { Component } from 'react';
// import { connect } from 'react-redux';


const initialState = {
    name: '',
    nameError: ''
}

class ComplexTextInput extends Component {
    constructor() {
        super();
        this.state = initialState;
    };


   updateName(event) {
        this.setState({ name: event.target.value });

    }
    validate = () => {
        if(this.state.name.length <3) {
            this.setState({nameError: 'Name is to short'});
            return false;
        }
        else if(this.state.name.length >20) {
            this.setState({nameError: 'Name is to long'});
            return false;
        }
        return true;
    }

    submitName(event) {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid) {
        console.log(this.state);
        }

    }
    render() {

        return (
            <div className="row">
                <form action="" className="col s12" onSubmit= {this.submitName.bind(this)}>
                <div className="row">
                    <div className="input-field col s4">
                        <input type="text" id="last_name" value={this.state.name} className="validate" onChange={this.updateName.bind(this)} />
                        <label htmlFor="last_name">Name</label>
                    </div>
                </div>
                <div className="row">{this.state.nameError}</div>
                <div className="row">
                    <button className="col s2">Submit</button>
                </div>
                </form>
            </div>
        )

        // const mapStateToProps = (state) => {
        //     return {
        //         inputName: state.inputName
        //     }
        // }

        // const mapDispatchToProps = (dispatch) => {
        //     return {
        //         inputChanged: () => {
        //             console.log('changed');
        //         }
        //     }
        // }
    }
}

export default ComplexTextInput;