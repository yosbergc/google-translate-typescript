import './App.css'
import { Header } from './components/Header/Header'
import { languages } from './constants'
function App() {
  return (
    <main>
      <section className="translator">
        <header>
          <Header isFromLanguage={true} languages={languages}/>
          <Header isFromLanguage={false} languages={languages}/>
        </header>
        <section className="text-container">
          <section className="fromText">
            <textarea name="" id="" rows={5}></textarea>
          </section>
          <section className="toText">
            <textarea name="" id="" rows={5} disabled placeholder='Traducción'></textarea>
          </section>
        </section>
      </section>
    </main>
  )
}

export default App
