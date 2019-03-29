// Core
import { createSelector } from 'reselect';
// Types
import { DROPDOWN_OPTIONS, DROPDOWN_OPTIONS_FINAL } from '../constants';

export const transformAnswerToSelectOption = (option, lang) => ({ 
    label: lang === 'ar-AE' ? option.Title :  option.Title_AR,  
    value: option.Score,
    originalOption: option
});

export const AnswerOptionSelector = createSelector(
    (state) => state.lang, 
    (lang) => DROPDOWN_OPTIONS.map((option) => transformAnswerToSelectOption(option, lang))
);
