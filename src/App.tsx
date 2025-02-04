import './App.css'
import { Header } from './components/Header/Header'
import { languages } from './constants'
import { TranslateContext } from './contexts/TranslateContext'
import { useContext } from 'react'
function App() {
  const context = useContext(TranslateContext)
  return (
    <main>
      <section className="translator">
        <h1>El Gran Traductor</h1>
        <header>
          <Header isFromLanguage={true} languages={languages} currentSelected={context?.state.fromLanguage || 'es'}/>
          <button className='swap-languages'></button>
          <Header isFromLanguage={false} languages={languages} currentSelected={context?.state.toLanguage || 'en'}/>
        </header>
        <section className="text-container">
          <section className="fromText">
            <textarea name="fromText" id="fromText" rows={5} autoFocus></textarea>
          </section>
          <section className="toText">
            <textarea name="toText" id="toText" rows={5} disabled placeholder='Traducción'></textarea>
          </section>
        </section>
      </section>
    </main>
  )
}

export default App
