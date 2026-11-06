import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Academics from './pages/Academics.jsx'
import Admission from './pages/Admission.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <div className="app-shell">
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/academics"
            element={
              <ProtectedRoute>
                <Academics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admission"
            element={
              <ProtectedRoute>
                <Admission />
              </ProtectedRoute>
            }
          />
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
