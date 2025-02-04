import { LanguageConstant } from "../../types/types";

function Header({ isFromLanguage, languages } : { isFromLanguage: boolean, languages: LanguageConstant[]}) {
    return (
        <section className="header-translate">
            {
                isFromLanguage && <button>Detectar idioma</button>
            }
            {
                languages.map((language, index) => {
                    if (index > 2) return;
                    return <button key={language.code}>{language.name}</button>
                })
            }
            <button className="down-arrow"></button>
        </section>
    )
}
export { Header }