// Core
import React, { PureComponent } from 'react';
import Select from 'react-select';

// Can we use Functional Components With Hooks ?
// Hooks are more advantce React
export default class Question extends PureComponent {
    handleAnswerChange = ({ originalOption }) => {
        const { selectAnswer, questionNumber, questionTitle } = this.props;

        selectAnswer(
            questionNumber, 
            questionTitle, 
            originalOption 
        );
    }

    render() {
        const { answerDropDownOptions, questionTitle, } = this.props;

        return (
            <div>
                <h2> { questionTitle } </h2>
                <Select
                    dropdownMode='select'
                    options={answerDropDownOptions}
                    onChange={ this.handleAnswerChange } // action - title + ansver => Email "Exeland"
                    value={this.props.selectedAnswer}
                />
                <i>Grades: </i>
            </div>
        )
    }
}
