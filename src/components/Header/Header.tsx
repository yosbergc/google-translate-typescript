import { LanguageConstant } from "../../types/types";
import './Header.css'
import { TranslateContext } from "../../contexts/TranslateContext";
import { useContext, useEffect, useState } from "react";
function Header({ isFromLanguage, languages, currentSelected } : { isFromLanguage: boolean, languages: LanguageConstant[], currentSelected: string}) {
    const context = useContext(TranslateContext)
    const [width, setWidth] = useState(window.innerWidth)
    const [showLanguages, setShowLanguages] = useState(false)
    function handleWidth() {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWidth)

        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    })
    return (
        <section className="header-translate">
            {
                width > 768 && isFromLanguage && <button className={currentSelected === 'auto' ? 'language-button active' : 'language-button'} onClick={() => {context?.changeFromLanguage('auto')}}>Detectar idioma</button>
            }
            {
                width > 768 && languages.map((language, index) => {
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
            {
                width > 768 && <section className="other-languages">
                    <button className="down-arrow" onClick={() => setShowLanguages(!showLanguages)}></button>
                    {
                        showLanguages && <section className="hiddenLanguages">
                            {
                                languages.map((language, index) => {
                                    if (index < 3) return;
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
            }
            {
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
            }
        </section>
    )
}
export { Header }