// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { createReduxRoot } from 'generic-redux-root';
// yup  - for val 
// Components
import Question from './components/Question';
import Bar from './components/Bar';

// Instruments
import { languageChanged, selectAnswer  } from './actions/index';
import reducers from './reducers';
import { AnswerOptionSelector, transformAnswerToSelectOption } from './selectors/AnswerOptionsSelector';
import {  QUESTIONNAIRE_Q1_TITLES, QUESTIONNAIRE_IDS } from './constants';

class ScoringPage extends Component {
  //  state  = {

  //  }
  componentDidMount() {
    const language = document.getElementById('cult').value;
    languageChanged(language);
  }

  handleSubmit = ()  => {
    this.props.submitAnswers();
  }

  render() {
    const { answerDropDownOptions, selectAnswer, answers } = this.props;

   // const selectedEmail = answers.responses[0].answers[QUESTIONNAIRE_Q1_TITLES.EMAIL];

    return (
      <div>
        <Bar
          // missionChanged={missionChanged}
          // quarterChanged={quarterChanged}
        />
        <div className='wrapper'>
          <h2>Communication Options</h2>

          <Question
            answerDropDownOptions={answerDropDownOptions}
            questionNumber={QUESTIONNAIRE_IDS.Q1}
            questionTitle={QUESTIONNAIRE_Q1_TITLES.EMAIL}
            selectAnswer={selectAnswer}
            // selectedAnswer={transformAnswerToSelectOption(selectedEmail, this.props.lang)}
          />

          <Question
            answerDropDownOptions={answerDropDownOptions}
            questionNumber={QUESTIONNAIRE_IDS.Q1}
            questionTitle={QUESTIONNAIRE_Q1_TITLES.SYSTEM_HUDHUD}
            selectAnswer={selectAnswer} 
          />

          <Question
            answerDropDownOptions={answerDropDownOptions}
            questionNumber={QUESTIONNAIRE_IDS.Q1}
            questionTitle={QUESTIONNAIRE_Q1_TITLES.TELEPHONE}
            selectAnswer={selectAnswer} 
          />

          <Question
            answerDropDownOptions={answerDropDownOptions}
            questionNumber={QUESTIONNAIRE_IDS.Q1}
            questionTitle={QUESTIONNAIRE_Q1_TITLES.DIPLOMATIC_BAGS}
            selectAnswer={selectAnswer}
          />

          <Question
            answerDropDownOptions={answerDropDownOptions}
            questionNumber={QUESTIONNAIRE_IDS.Q1}
            questionTitle={QUESTIONNAIRE_Q1_TITLES.SMS}
            selectAnswer = {selectAnswer}
          />
          
          <Question
            answerDropDownOptions={answerDropDownOptions} 
            questionNumber={QUESTIONNAIRE_IDS.Q1}
            questionTitle={QUESTIONNAIRE_Q1_TITLES.OTHER}  
            selectAnswer={selectAnswer}
          />

          <h2>How effective was information</h2>
          <Question
            answerOptionSelectorFinel={answerOptionSelectorFinel}
            questionNumber={QUESTIONNAIRE_IDS.Q2}
            selectAnswer={selectAnswer} // action  new name 
          />

          <textarea placeholder="Leave a comment" />
          <input
            className='btn'
            type='submit'
            onClick = {this.handleSubmit}
            placeholder='Submit'
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ page, items }) =>  ({
  lang:       page.lang, 
  quarters:   page.quarters,

  answerDropDownOptions: AnswerOptionSelector(page),
  items
});

const ScoringPageConnect = connect(mapStateToProps, {
  languageChanged,
  selectAnswer,

})(ScoringPage);

export const ReduxRoot = createReduxRoot(reducers, ScoringPageConnect);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
  render(
    <ReduxRoot />,
    document.getElementById('root')
  );
}
