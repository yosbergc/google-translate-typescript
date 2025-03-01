import type { TranslateState, Action } from '../types/types';
import { AUTO_LANGUAGE } from '../constants.ts'

function translateReducer(state: TranslateState, action: Action): TranslateState {
    if (action.type === 'CHANGE_FROM_TEXT') {
        const newState = {...state}
        newState.fromText = action.payload;
        newState.loading = true;
        if (action.payload === '') {
            newState.toText = '';
            newState.loading = false;
        }
        
        return newState;
    }

    if (action.type === 'INTERCHANGE_LANGUAGES') {
        if (state.fromLanguage === AUTO_LANGUAGE) return state;
        if (state.fromLanguage === state.toLanguage) return state;
        
        const newState = {...state}
        const loading = state.fromText !== '';

        const fromLanguage = state.fromLanguage;
        newState.fromLanguage = state.toLanguage;
        newState.toLanguage = fromLanguage;

        const toText = state.toText;
        newState.toText = newState.fromText;
        newState.fromText = toText;
        
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

    if (action.type === 'CHANGE_TO_TEXT') {
        const newState = {...state}
        newState.loading = false;

        newState.toText = action.payload

        return newState;
    }

    return {...state};
}
export { translateReducer }