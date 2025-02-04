import './App.css'
import { Header } from './components/Header/Header'
import { languages } from './constants'
function App() {
  return (
    <main>
      <section className="translator">
        <h1>El Gran Traductor</h1>
        <header>
          <Header isFromLanguage={true} languages={languages} currentSelected='auto'/>
          <button className='swap-languages'></button>
          <Header isFromLanguage={false} languages={languages} currentSelected='auto'/>
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
