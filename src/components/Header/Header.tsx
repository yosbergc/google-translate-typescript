import { LanguageConstant } from "../../types/types";
import './Header.css'
import { useEffect, useState } from "react";
import { CurrentLanguage } from "../CurrentLanguage/CurrentLanguage";
import { VisibleLanguages } from "../VisibleLanguages/VisibleLanguages";
import { HiddenLanguages } from "../HiddenLanguages/HiddenLanguages";
import { MobileLanguages } from "../MobileLanguages/MobileLanguages";
import { AutoLanguage } from "../AutoLanguage/AutoLanguage";
function Header({
    isFromLanguage,
    languages,
    currentSelected } : {
        isFromLanguage: boolean,
        languages: LanguageConstant[],
        currentSelected: string
    }) {
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
            <AutoLanguage
            currentSelected={currentSelected}
            isFromLanguage={isFromLanguage}
            width={width}
            />
            <CurrentLanguage
            languages={languages}
            isFromLanguage={isFromLanguage}
            currentSelected={currentSelected}
            width={width}
            />
            <VisibleLanguages
            languages={languages}
            currentSelected={currentSelected}
            isFromLanguage={isFromLanguage}
            width={width}
            />
            <HiddenLanguages
            currentSelected={currentSelected}
            isFromLanguage={isFromLanguage}
            languages={languages}
            setShowLanguages={setShowLanguages}
            showLanguages={showLanguages}
            width={width}
            />
            <MobileLanguages
            currentSelected={currentSelected}
            isFromLanguage={isFromLanguage}
            languages={languages}
            setShowLanguages={setShowLanguages}
            showLanguages={showLanguages}
            width={width}
            />
        </section>
    )
}
export { Header }