import { LanguageConstant } from "../../types/types";
import './Header.css'
import { TranslateContext } from "../../contexts/TranslateContext";
import { useContext } from "react";
function Header({ isFromLanguage, languages, currentSelected } : { isFromLanguage: boolean, languages: LanguageConstant[], currentSelected: string}) {

    const context = useContext(TranslateContext)
    
    return (
        <section className="header-translate">
            {
                isFromLanguage && <button className={currentSelected === 'auto' ? 'language-button active' : 'language-button'} onClick={() => {context?.changeFromLanguage('auto')}}>Detectar idioma</button>
            }
            {
                languages.map((language, index) => {
                    if (index > 2) return;
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
            <button className="down-arrow"></button>
        </section>
    )
}
export { Header }