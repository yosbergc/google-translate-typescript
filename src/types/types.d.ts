export type AutoLanguage = 'auto'
export type Language  = 'es' | 'en' | 'it' | 'pr'
export type FromLanguage = Language | AutoLanguage

interface TranslateState {
    fromText: string,
    toText: string,
    fromLanguage: FromLanguage,
    toLanguage: Language,
    loading: boolean
}

type Action = 
    | { type: 'CHANGE_FROM_TEXT', payload: string }
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'CHANGE_FROM_LANGUAGE', payload: FromLanguage }
    | { type: 'CHANGE_TO_LANGUAGE', payload: Language }

export type { AutoLanguage, Language, FromLanguage, TranslateState, Action }