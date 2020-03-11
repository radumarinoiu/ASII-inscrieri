import React, { Component } from "react";
import CustomTextarea from "../CustomTextarea/CustomTextarea";
import CustomMultipleAnswers from "../CustomMultipleAnswers/CustomMultipleAnswers";

export default class QuestionAnswer extends Component {
    render() {
        const {
            options,
            ...props
        } = this.props;
        if(options && options.length) {
            return <CustomMultipleAnswers  {...this.props} />
        }
        return <CustomTextarea {...props} />
    }
}
