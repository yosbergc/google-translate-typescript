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
export type LanguageConstant = {
    name: string,
    code: Language
}
export type TranslateContext = {
    state: TranslateState,
    interchangeLanguages: () => void,
    changeFromLanguage: (newFromLanguage: FromLanguage) => void,
    changeFromText: (newText: string) => void,
    changeToLanguage: (newToLanguage: Language) => void,
    changeToText?: (newText: string) => void
} | null;

type Action = 
    | { type: 'CHANGE_FROM_TEXT', payload: string }
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'CHANGE_FROM_LANGUAGE', payload: FromLanguage }
    | { type: 'CHANGE_TO_LANGUAGE', payload: Language }
    | { type: 'CHANGE_TO_TEXT', payload: string }

export type { AutoLanguage, Language, FromLanguage, TranslateState, Action }