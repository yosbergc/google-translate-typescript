import { TranslateContext } from "../../contexts/TranslateContext";
import { useContext } from "react";
function AutoLanguage({
    width,
    currentSelected,
    isFromLanguage
} : {
    width: number,
    currentSelected: string,
    isFromLanguage: boolean
}) {
    const context = useContext(TranslateContext)
    return (
        width > 768 && isFromLanguage && (
            <button
            className={currentSelected === 'auto' ? 'language-button active' : 'language-button'}
            onClick={() => {context?.changeFromLanguage('auto')}}>
                Detectar idioma
            </button>
        )
    )
}
export { AutoLanguage }