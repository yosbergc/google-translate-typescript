import './App.css'
import { Header } from './components/Header/Header'
import { languages } from './constants'
function App() {
  return (
    <main>
      <section className="translator">
        <header>
          <Header isFromLanguage={true} languages={languages}/>
        </header>
        <section className="fromText">

        </section>
        <section className="toText">

        </section>
      </section>
    </main>
  )
}

export default App
