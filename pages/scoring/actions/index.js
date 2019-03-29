import { dispatchAsync } from 'generic-loader/dispatch'
import { LANGUAGE_CHANGED, QUARTER_CHANGED, MISSION_CHANGED, CREATE_COMMENT, FILL_COMMENT, QUESTION_SELECT } from './constants';
import { getUserDetails } from "../api/UserAPI";
import { getManagingDepartmentForUser } from '../api/InMemoryADAPI';
import { getData } from "../api/ItemsAPI";

// lang
export const languageChanged = (lang) => ({ type: LANGUAGE_CHANGED, payload: lang });

// quarter
export const quarterChanged = (quarter) => ({ type: QUARTER_CHANGED, payload: quarter });

// mission
export const missionChanged = (mission) => ({ type: MISSION_CHANGED, payload: mission });

// comments
export const createComments = (comment) => ({ type: CREATE_COMMENT, payload: comment });
export const fillComments = (comments) => ({ type: FILL_COMMENT, payload: comments });

// roles 
export const onPageLoad = async () => async (dispatch, getState) => {
    const currentQuarter = getState().page.currentQuarter;

    const loggedInUserDetails = await getUserDetails();  // user 
    const managingDepartmentDetails = await getManagingDepartmentForUser(loggedInUserDetails.PerformanceDashboardID); // departments
    const data = await getData(managingDepartmentDetails.PerformanceDashboardID, loggedInUserDetails.PerformanceDashboardID, currentQuarter);

    const payload = {
        loggedInUserDetails,
        managingDepartmentDetails,
        data
    };

    dispatchAsync(Promise.resolve(payload), INITIAL_PAGE_LOAD)(dispatch);
};

export const selectedAnswerChanged = (questionNumber, questionTitle, chosenOption) => {
    console.log('aaa')
    return ({
        type: QUESTION_SELECT.success,
        payload: {
            questionNumber,
            questionTitle,
            chosenOption
        }
    });
}