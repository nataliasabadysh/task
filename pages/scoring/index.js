//Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { createReduxRoot } from 'generic-redux-root';

// Components
import Questions from './components/Questions';
import Bar from './components/Bar';

//Instruments
import { languageChanged, selectedAnswerChanged  } from './actions/index';

import reducers from './reducers';  // PageSettingsReducer
import { AnswerOptionSelector, transformAnswerToSelectOption } from './selectors/AnswerOptionsSelector';
import { OPTIONS_Q1, QUESTION_NUMBER } from './constants';



class ScoringPage extends Component {

  state = {
    quarters: this.props.quarters,
  }

  componentDidMount() {
    // fire action with this language to store it in a reducer.
    const language = document.getElementById('cult').value;
    languageChanged(language);
    
    // onPageLoad()
    // onPageLoad(data)
    
    // this.setState({
    //   quarters: quarterChanged
    // })

  }

  render() {
    const { answerDropDownOptions, selectedAnswerChanged, items } = this.props;

    const selectedEmail = items.toSurvey.responses[0].answers[OPTIONS_Q1.EMAIL];
    return (
      <div>
        <link rel="stylesheet" href='/src/pages/scoring/components/styles.css' />
        <Bar
          // missionChanged={missionChanged}
          // quarterChanged={quarterChanged}
        />

        <div className='wrapper'>

          <h2>Communication Options</h2>


        
          <Questions 
            answerDropDownOptions={answerDropDownOptions}
            questionNumber={QUESTION_NUMBER.Q1}
            questionTitle={OPTIONS_Q1.EMAIL}
            selectedAnswerChanged={selectedAnswerChanged}
            selectedAnswer={transformAnswerToSelectOption(selectedEmail, this.props.lang)}
          />

        
          <Questions 
            answerDropDownOptions={answerDropDownOptions}
            questionNumber={QUESTION_NUMBER.Q1}
            questionTitle={OPTIONS_Q1.SYSTEM_HUDHUD}
            selectedAnswerChanged={selectedAnswerChanged} 
          />

          <Questions 
            answerDropDownOptions={answerDropDownOptions}
            questionNumber={QUESTION_NUMBER.Q1}
            questionTitle={OPTIONS_Q1.TELEPHONE}
            selectedAnswerChanged={selectedAnswerChanged} 
          />

        
          <Questions 
            answerDropDownOptions={answerDropDownOptions}
            questionNumber={QUESTION_NUMBER.Q1}
            questionTitle={OPTIONS_Q1.DIPLOMATIC_BAGS}
            selectedAnswerChanged={selectedAnswerChanged}
          />

        
          <Questions 
            answerDropDownOptions={answerDropDownOptions}
            questionNumber={QUESTION_NUMBER.Q1}
            questionTitle={OPTIONS_Q1.SMS}
            selectedAnswerChanged = {selectedAnswerChanged}
          />
          
          <Questions 
            answerDropDownOptions={answerDropDownOptions} 
            questionNumber={QUESTION_NUMBER.Q1}
            questionTitle={OPTIONS_Q1.OTHER}  
            selectedAnswerChanged={selectedAnswerChanged}
          />


          <h2>How effective was information</h2>

          {/* <Questions
            answerOptionSelectorFinel={answerOptionSelectorFinel}
            questionNumber={QUESTION_NUMBER.Q2}
            selectedAnswers={selectedAnswers} // action
          /> */}

          <textarea placeholder="Leave a comment" />
          <input
            className='btn'
            type='submit'
            placeholder='Submit'
          />

        </div>
      </div>
    );
  }
}




// State 
const mapStateToProps = ({ page, items }) =>  ({
  lang: page.lang, 
  quarters: page.quarters, 

  answerDropDownOptions: AnswerOptionSelector(page),
  items
});

const ScoringPageConnect = connect(mapStateToProps, {
  languageChanged,
  selectedAnswerChanged,

})(ScoringPage);


export const ReduxRoot = createReduxRoot(reducers, ScoringPageConnect);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
  render(
    <ReduxRoot />,
    document.getElementById('root')
  );
}
