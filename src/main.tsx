import { createRoot } from 'react-dom/client'
import { ProvideTranslateContext } from './contexts/TranslateContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<ProvideTranslateContext>
  <App />
</ProvideTranslateContext>
)
