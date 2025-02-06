import { LanguageConstant } from "../../types/types"
import { TranslateContext } from "../../contexts/TranslateContext";
import { useContext } from "react";

function MobileLanguages({
    width,
    languages,
    showLanguages,
    currentSelected,
    setShowLanguages,
    isFromLanguage
} : {
    width: number,
    languages: LanguageConstant[],
    showLanguages: boolean
    currentSelected: string,
    setShowLanguages: (newValue: boolean) => void,
    isFromLanguage: boolean
}) {
    const context = useContext(TranslateContext)

    return (
        width < 768 && languages.filter(language => language.code === currentSelected).map((language) => {
            return <section className="other-languages">
                <button 
                key={language.code}
                className={currentSelected === language.code ? 'language-button active' : 'language-button'}
                onClick={() => setShowLanguages(!showLanguages)}
                >{language.name}</button>
                {
                showLanguages && <section className="hiddenLanguages">
                    {
                        languages.map((language) => {
                            return <button 
                            key={language.code}
                            className={currentSelected === language.code ? 'language-button active' : 'language-button'}
                            onClick={() => {
                                setShowLanguages(false)
                                if (isFromLanguage) {
                                    context?.changeFromLanguage(language.code)
                                } else {
                                    context?.changeToLanguage(language.code)
                                }
                            }}
                            >{language.name}</button>
                        })
                    }
                </section>
            }
            </section>
        })
    )
}
export { MobileLanguages }