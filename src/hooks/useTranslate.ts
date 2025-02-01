import { translateReducer } from "../reducers/translateReducer"
import { useReducer } from "react"
import { FromLanguage, Language, TranslateState,  } from "../types/types"

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
    
    return { state, changeFromLanguage, changeFromText, interchangeLanguages, changeToLanguage }
}

export { useTranslate }