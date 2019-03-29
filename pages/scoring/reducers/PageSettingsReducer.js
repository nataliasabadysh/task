import { LANGUAGE_CHANGED, MISSION_CHANGED, QUARTER_CHANGED, CREATE_COMMENT, FILL_COMMENT, INITIAL_PAGE_LOAD } from "../actions/constants";
import DateKit from "../../../../GenericReactComponents/source/aids/DateKit";

const INITIAL_STATE = {
    lang: 'ar-AE',
    comment: '',
    loggedInUser: null, // null

    quarters: DateKit.quartersList('Q1 2019', new Date().getQuarter(), false), 
    selectedQuarter: new Date().getQuarter(),
    
    managingDepartmentForUser: null,
    surveyData: null
};

export const pageSettingsReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LANGUAGE_CHANGED:
            return { ...state, lang: payload.lang };

        case QUARTER_CHANGED:
            return { ...state, quarters: payload.quarters };

        case MISSION_CHANGED:
            return { ...state, mission: payload.mission };

        case CREATE_COMMENT:
            return { ...state, comment: payload.comment };

        case FILL_COMMENT:
            return { ...state, comments: payload.comments };

            
        case INITIAL_PAGE_LOAD.success: {
            const {
                loggedInUserDetails,
                managingDepartmentDetails,
                data
            } = payload;
            
            return {
                ...state,
                loggedInUser: loggedInUserDetails,
                managingDepartmentForUser: managingDepartmentDetails,
                surveyData: data
            };
        }
        default:
            return state;
    }
};