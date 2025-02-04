import { useTranslate } from "../hooks/useTranslate";
import { createContext } from "react";
import { TranslateContext as TranslateContextType } from "../types/types";

const TranslateContext = createContext<TranslateContextType>(null)

function ProvideTranslateContext({ children } : { children: JSX.Element }) {
    const { state, interchangeLanguages, changeToLanguage, changeFromLanguage, changeFromText } = useTranslate()
    console.log(state)
    return <TranslateContext.Provider value={{
        state,
        interchangeLanguages,
        changeFromLanguage,
        changeFromText,
        changeToLanguage
    }}>
        { children }
    </TranslateContext.Provider>
}

export { ProvideTranslateContext, TranslateContext }