import { LanguageConstant } from "../../types/types";
import './Header.css'
function Header({ isFromLanguage, languages } : { isFromLanguage: boolean, languages: LanguageConstant[]}) {
    return (
        <section className="header-translate">
            {
                isFromLanguage && <button className="language-button">Detectar idioma</button>
            }
            {
                languages.map((language, index) => {
                    if (index > 2) return;
                    return <button key={language.code} className="language-button">{language.name}</button>
                })
            }
            <button className="down-arrow"></button>
        </section>
    )
}
export { Header }