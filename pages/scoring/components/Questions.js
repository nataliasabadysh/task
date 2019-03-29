// Core
import React, { PureComponent } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';


export default class Questions extends PureComponent {

    state = {
        // init state
        // value: this.props.answerDropDownOptions[0],
        // value: this.props.answerOptionSelectorFinel[1].value  ,
    }

    handleAnswerChange = ({ originalOption }) => {
        const { selectedAnswerChanged, questionNumber, questionTitle } = this.props;
        selectedAnswerChanged(
            questionNumber,
            questionTitle,
            originalOption
        );
    }

    render() {
        const { answerDropDownOptions, questionTitle, } = this.props;

        return (
            <div>
                <h2> {questionTitle} </h2>

                <Select
                    dropdownMode='select'
                    options={answerDropDownOptions}
                    onChange={this.handleAnswerChange.bind(this)}
                    value={this.props.selectedAnswer}
                />
                <i>Grades: </i>
            </div>
        )
    }
}

Questions.propTypes = {
    answerDropDownOptions: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        chosenOption: PropTypes.object
    })).isRequired,
    questionNumber: PropTypes.string.isRequired,
    questionTitle: PropTypes.string.isRequired,
    selectedAnswerChanged: PropTypes.func.isRequired,
    selectedAnswer: PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
    })
}
