import type { TranslateState, Action } from '../types/types';
import { AUTO_LANGUAGE } from '../constants.ts'

function translateReducer(state: TranslateState, action: Action) {
    if (action.type === 'CHANGE_FROM_TEXT') {
        const newState = {...state}
        newState.fromText = action.payload;
        newState.loading = true;
        return newState;
    }

    if (action.type === 'INTERCHANGE_LANGUAGES') {
        if (state.fromLanguage === AUTO_LANGUAGE) return;
        
        
        const newState = {...state}
        const loading = state.fromText !== '';

        const fromLanguage = state.fromLanguage;
        newState.fromLanguage = state.toLanguage;
        newState.toLanguage = fromLanguage;
        newState.loading = loading;
        return newState;
    }

    if (action.type === 'CHANGE_FROM_LANGUAGE') {
        const newState = {...state}
        const loading = state.fromText !== '';

        newState.fromLanguage = action.payload;
        newState.loading = loading;

        return newState;
    }

    if (action.type === 'CHANGE_TO_LANGUAGE') {
        const newState = {...state}
        const loading = state.fromText !== '';

        newState.toLanguage = action.payload;
        newState.loading = loading

        return newState;
    }
}
export { translateReducer }