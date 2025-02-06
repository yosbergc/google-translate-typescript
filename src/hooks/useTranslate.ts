/* eslint-disable react-hooks/exhaustive-deps */
import { translateReducer } from "../reducers/translateReducer"
import { useEffect, useReducer, useCallback } from "react"
import { FromLanguage, Language, TranslateState,  } from "../types/types"
import { Translate } from "../services/translate"
import debounce from "debounce"
const initialState: TranslateState = {
    fromText: '',
    toText: '',
    fromLanguage: 'es',
    toLanguage: 'en',
    loading: false
}

function useTranslate() {
    const [state, dispatch] = useReducer(translateReducer, initialState)

    function changeFromLanguage(newFromLanguage: FromLanguage) {
        dispatch({ type: 'CHANGE_FROM_LANGUAGE', payload: newFromLanguage})
    }

    function changeFromText(newText: string) {
        dispatch({ type: 'CHANGE_FROM_TEXT', payload: newText})
    }

    function interchangeLanguages() {
        dispatch({ type: 'INTERCHANGE_LANGUAGES'})
    }

    function changeToLanguage(newToLanguage: Language) {
        dispatch({ type: 'CHANGE_TO_LANGUAGE', payload: newToLanguage})
    }
    
    function changeToText(newText: string) {
        dispatch({ type: 'CHANGE_TO_TEXT', payload: newText})
    }
    const debounceApiCall = debounce((fromText, fromLanguage, toLanguage) => {
        Translate(fromLanguage, toLanguage, fromText)
        .then(data => changeToText(data.trans))
    }, 300);
    
    const apiCall = useCallback((fromText: string, fromLanguage: FromLanguage, toLanguage: Language) => {
        debounceApiCall(fromText, fromLanguage, toLanguage);
    }, []);

    useEffect(() => {
        if(state.fromText === '') return;
        apiCall(state.fromText, state.fromLanguage, state.toLanguage)

    }, [state.fromLanguage, state.fromText, state.toLanguage])
    return { state, changeFromLanguage, changeFromText, interchangeLanguages, changeToLanguage }
}

export { useTranslate }