import { LanguageConstant } from "../../types/types";
import './Header.css'
function Header({ isFromLanguage, languages, currentSelected } : { isFromLanguage: boolean, languages: LanguageConstant[], currentSelected: string}) {
    return (
        <section className="header-translate">
            {
                isFromLanguage && <button className={currentSelected === 'auto' ? 'language-button active' : 'language-button'}>Detectar idioma</button>
            }
            {
                languages.map((language, index) => {
                    if (index > 2) return;
                    return <button key={language.code} className={currentSelected === language.code ? 'language-button active' : 'language-button'}>{language.name}</button>
                })
            }
            <button className="down-arrow"></button>
        </section>
    )
}
export { Header }