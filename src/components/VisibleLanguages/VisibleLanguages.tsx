import { LanguageConstant } from "../../types/types";
import { TranslateContext } from "../../contexts/TranslateContext";
import { useContext } from "react";

function VisibleLanguages({ 
    width,
    languages,
    currentSelected,
    isFromLanguage
} : {
    width: number,
    languages: LanguageConstant[],
    currentSelected: string,
    isFromLanguage: boolean
}) {

    const context = useContext(TranslateContext)
    return (
        width > 768 && languages.filter((language) => language.code !== currentSelected).map((language, index) => {
            if (index > 1) return;
            return <button 
            key={language.code}
            className={currentSelected === language.code ? 'language-button active' : 'language-button'}
            onClick={() => {
                if (isFromLanguage) {
                    context?.changeFromLanguage(language.code)
                } else {
                    context?.changeToLanguage(language.code)
                }
            }}
            >{language.name}</button>
        })
    )
}

export { VisibleLanguages }