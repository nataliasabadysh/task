import produce from "immer";

// types
import { QUESTION_SELECT } from '../actions/constants';
import { QUESTION_NUMBER } from "../constants";


export const INITIAL_STATE = {
    fromSurvey: {
        "responses": [
            {
                "question": "Q1",
                "answers": {
                    "E-mail": {
                        "Title": "We are fully aware of the developments",
                        "Title_AR": "Arabic",
                        "Score": 100
                    },
                    "System Hudhud": {
                        "Title": "We are fully aware of the developments",
                        "Title_AR": "Arabic",
                        "Score": 100
                    },
                    "Telephone conversation": {
                        "Title": "We are fully aware of the developments",
                        "Title_AR": "Arabic",
                        "Score": 100
                    },
                    "Diplomatic bags": {
                        "Title": "We are fully aware of the developments",
                        "Title_AR": "Arabic",
                        "Score": 100
                    },
                    "Text messages": {
                        "Title": "We are fully aware of the developments",
                        "Title_AR": "Arabic",
                        "Score": 100
                    },
                    "Other": {
                        "Title": "We are fully aware of the developments",
                        "Title_AR": "Arabic",
                        "Score": 100
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
        "comments": "ABCD",
        "total": 80,
        "fromDepartmentPDID": 84,
        "forDepartmentPDID": 90,
        "quarter": "Q2 2018"
    },
    toSurvey: {
        "responses": [
            {
                "question": "Q1",
                "answers": {
                    "E-mail": {
                        "Title": "Excellent",
                        "Title_AR": "Arabic",
                        "Score": 100
                    },
                    "System Hudhud": {
                        "Title": "Excellent",
                        "Title_AR": "Arabic",
                        "Score": 100
                    },
                    "Telephone conversation": {
                        "Title": "Excellent",
                        "Title_AR": "Arabic",
                        "Score": 100
                    },
                    "Diplomatic bags": {
                        "Title": "Excellent",
                        "Title_AR": "Arabic",
                        "Score": 100
                    },
                    "Text messages": {
                        "Title": "Excellent",
                        "Title_AR": "Arabic",
                        "Score": 100
                    },
                    "Other": {
                        "Title": "Excellent",
                        "Title_AR": "Arabic",
                        "Score": 100
                    }
                }
            },
            {
                "question": "Q2",
                "answer": {
                    "Title": "Excellent",
                    "Title_AR": "Arabic",
                    "Score": 100
                }
            }
        ],
        "comments": "ABCD",
        "total": 80,
        "fromDepartmentPDID": 84,
        "forDepartmentPDID": 90,
        "quarter": "Q2 2018"
    }
};


export const itemsReducer = (state = INITIAL_STATE, { type, payload }) => {
    return produce(state, (draft) => {
        switch (type) {
            case QUESTION_SELECT.success: {
                const { questionNumber, questionTitle, chosenOption } = payload;
                if (QUESTION_NUMBER.Q1 === questionNumber) {
                    draft.toSurvey.responses[0].answers[questionTitle] = chosenOption;
                } else {
                    draft.toSurvey.responses[1].answer = chosenOption;
                }
            }
        }
    });
}
