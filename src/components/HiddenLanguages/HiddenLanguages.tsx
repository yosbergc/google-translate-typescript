import { TranslateContext } from "../../contexts/TranslateContext";
import { useContext } from "react";
import { LanguageConstant } from "../../types/types";
function HiddenLanguages({
    width,
    setShowLanguages,
    showLanguages,
    currentSelected,
    isFromLanguage,
    languages
} : {
    width: number,
    setShowLanguages: (newValue: boolean) => void,
    showLanguages: boolean,
    currentSelected: string,
    isFromLanguage: boolean,
    languages: LanguageConstant[]
}) {
    const context = useContext(TranslateContext)
    return (
        width > 768 && <section className="other-languages">
                <button className="down-arrow" onClick={() => setShowLanguages(!showLanguages)}></button>
                    {
                        showLanguages && <section className="hiddenLanguages">
                            {
                                languages.filter(language => language.code !== currentSelected).map((language, index) => {
                                    if (index < 2) return;

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
                            }
                        </section>
                    }
        </section>
    )
}
export { HiddenLanguages }