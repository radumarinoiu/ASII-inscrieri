import React, { Component, Fragment } from "react";
import "./CustomMultipleAnswers.scss";
import classnames from "classnames";
export default class CustomMultipleAnswers extends Component {
    state = {
        selected: {},
    };
    handleInputChange = (option) => (e) => {
        const { selected } = this.state;
        const { name, handleChange } = this.props;
        const newSelected =  {...selected, [option]: !selected[option]};
        this.setState({ selected: newSelected });
        e.target.name = name;
        e.target.value = Object.keys(newSelected).filter(e=>newSelected[e]).join(', ');
        handleChange(e);
    };
    render() {
        const {
            dataError,
            name,
            value,
            label,
            options,
        } = this.props;
        return (
            <div
                className={classnames("group-items col s12", {
                    error: dataError && dataError !== "OK"
                })}
            >
                <h2 style={{ fontSize: 30 }}>{label}</h2>
                {options.map((e, i) => <>
                    <label htmlFor={name}>{e}</label>
                    <input
                        name={e}
                        id={name}
                        type="checkbox"
                        checked={value.includes(e)}
                        onChange={this.handleInputChange(e)} />
                </>)}
            </div>
        );
    }
}
