import { dispatchAsync } from 'generic-loader/dispatch'
import * as constants   from './constants';
import { getUserDetails } from "../api/UserAPI";
import { getManagingDepartmentForUser } from '../api/InMemoryADAPI';
import { getData } from "../api/ItemsAPI";

// lang
export const changeLanguage = (lang) => ({ type: constants.CHANGE_LANGUAGE, payload: lang }); 

// // quarter
// export const quarterChanged = (quarter) => ({ type: QUARTER_CHANGED, payload: quarter });
// // mission
// export const missionChanged = (mission) => ({ type: MISSION_CHANGED, payload: mission });

// // comments
// export const createComments = (comment) => ({ type: CREATE_COMMENT, payload: comment });
// export const fillComments = (comments) => ({ type: FILL_COMMENT, payload: comments });


export const loadInitialData = async () => async (dispatch, getState) => {
    const currentQuarter = getState().page.currentQuarter; // date 
    const loggedInUserDetails = await getUserDetails();  // user  id
    const managingDepartmentDetails = await getManagingDepartmentForUser(loggedInUserDetails.PerformanceDashboardID); // departments
    
    const data = await getData(managingDepartmentDetails.PerformanceDashboardID, loggedInUserDetails.PerformanceDashboardID, currentQuarter);

    const payload = {
        loggedInUserDetails,
        managingDepartmentDetails,
        data
    };
    dispatchAsync(Promise.resolve(payload), constants.INITIAL_PAGE_LOAD)(dispatch);
};


export const selectAnswer = (questionNumber, questionTitle, chosenOption) => {
    return ({
        type: QUESTION_SELECT.success,
        payload: {
            questionNumber,
            questionTitle,
            chosenOption
        }
    });
}

export const submitAnswers = ()=>  async ( dispatch, getState ) =>  {
   // getState (response.answers.questTitle )  - get data from user 
   // sent data to server  response.answers. 
}

// sabmitAnswers