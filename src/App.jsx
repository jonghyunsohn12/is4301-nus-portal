import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Academics from './pages/Academics.jsx'
import Admission from './pages/Admission.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className="app-shell">
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>National University of Singapore</p>
      </footer>
    </div>
  )
}

export default App
