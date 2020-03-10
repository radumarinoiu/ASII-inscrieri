import React, { Component, Fragment } from "react";
import "./CustomMultipleAnswers.scss";
import classnames from "classnames";
export default class CustomMultipleAnswers extends Component {
    state = {
        selected: {},
    };
    handleInputChange = (option) => (e) => {
        const { selected } = this.state;
        const newSelected =  {...selected, [option]: !selected[option]};
        this.setState({ selected: newSelected });
        console.log(newSelected)
        e.target.name = this.props.name;
        e.target.value = Object.keys(newSelected).filter(e=>newSelected[e]).join(', ');
        this.props.handleChange(e);
    };
    render() {
        const {
            dataError,
            type,
            name,
            id,
            value,
            label,
            handleChange,
            placeholder,
            min,
            handleOnBlur,
            max,
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
        return (
            <Fragment>
                {this.props && (
                    <div
                        className={classnames("group-items col s12", {
                            error: dataError && dataError !== "OK"
                        })}
                    >
                        <label htmlFor={name}>{label}</label>
                        <textarea
                            id={id}
                            onChange={handleChange}
                            name={name}
                            minLength={min}
                            onBlur={handleOnBlur}
                            maxLength={max}
                            rows={3}
                            min={min}
                            max={max}
                            type={type}
                            className="validate"
                            value={value}
                            placeholder={placeholder}
                        />

                        {dataError && dataError !== "OK" && (
                            <div className="errorMessage">
                                <span>{dataError}</span>{" "}
                            </div>
                        )}
                    </div>
                )}
            </Fragment>
        );
    }
}
