import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalProvider } from './providers'
import "src/assets"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
)
