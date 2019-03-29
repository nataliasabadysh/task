import produce from "immer";

// types
import { QUESTION_SELECT } from '../actions/constants';
import { QUESTION_NUMBER } from "../constants";


export const INITIAL_STATE = {
        "responses": [
            {
                "question": "Q1",
                "answers": { 
                    "E-mail": {
                       
                    },
                    "System Hudhud": {
                        
                       
                    },
                    "Telephone conversation": {
                        
                    },
                    "Diplomatic bags": {
                        
                    },
                    "Text messages": {
                        
                    },
                    "Other": {
                        
                    }
                }
            },
            {
                "question": "Q2",

                "answer": {
                    "Title": "I can use it very effectively",
                    "Title_AR": "Arabic",
                    "Score": 100
                },

            }
        ],
        "comments": "hey comments ",
        "total": 80,
        "fromDepartmentPDID": 84,   // IT
        "forDepartmentPDID": 90,    // marking
        "quarter": "Q2 2018"        // date  2018 , 2017 socia 

};
// anser from select option 
export const answersReducer = (state = INITIAL_STATE, { type, payload }) => {
    return produce(state, (draft) => {
        switch (type) {
            case QUESTION_SELECT.success: { 
                const { questionNumber, questionTitle, chosenOption } = payload; // Q1, Email , new optionals 
                if (QUESTION_NUMBER.Q1 === questionNumber) {
                    draft.responses[0].answers[questionTitle] = chosenOption; 
                } else {
                    draft.responses[1].answer = chosenOption;
                }
            }
        }
    });
}
