import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Unsubscribe from './pages/Unsubscribe'
import NotFound from './pages/NotFound'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}

export default App
