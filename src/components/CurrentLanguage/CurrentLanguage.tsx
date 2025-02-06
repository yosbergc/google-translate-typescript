import { LanguageConstant } from "../../types/types"
import { TranslateContext } from "../../contexts/TranslateContext";
import { useContext } from "react";
function CurrentLanguage({ languages, currentSelected, isFromLanguage, width } : { languages: LanguageConstant[], currentSelected: string, isFromLanguage: boolean, width: number }) {
    const context = useContext(TranslateContext)
    return (
        width > 768 && languages.filter((language) => language.code === currentSelected).map((language) => {
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
export { CurrentLanguage }