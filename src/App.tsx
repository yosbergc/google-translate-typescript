import './App.css'
import { Header } from './components/Header/Header'
import { languages } from './constants'
import { TranslateContext } from './contexts/TranslateContext'
import { useContext } from 'react'
function App() {
  const context = useContext(TranslateContext)
  function handleFromText(event: React.ChangeEvent<HTMLTextAreaElement>) {
    context?.changeFromText(event.target.value)
  }
  return (
    <main>
      <section className="translator">
        <header>
          <Header isFromLanguage={true} languages={languages} currentSelected={context?.state.fromLanguage || 'es'}/>
          <button className={context?.state.fromLanguage === 'auto' ? 'swap-languages disabled' : 'swap-languages'} onClick={context?.interchangeLanguages}></button>
          <Header isFromLanguage={false} languages={languages} currentSelected={context?.state.toLanguage || 'en'}/>
        </header>
        <section className="text-container">
          <section className="fromText">
            <textarea name="fromText" id="fromText" rows={6} autoFocus value={context?.state.fromText} onChange={(e) => { handleFromText(e)}}></textarea>
          </section>
          <section className="toText">
            <textarea name="toText" id="toText" rows={6} disabled placeholder={context?.state.loading ? 'Estamos en proceso...' : 'Traducción'} value={context?.state.toText}></textarea>
          </section>
        </section>
      </section>
    </main>
  )
}

export default App
