import { signOut } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { auth } from '../firebase.js'

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admission', to: '/admission' },
]

function NavBar() {
  const { user } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await signOut(auth)
    navigate('/login', {
      replace: true,
      state: { message: 'You have been logged out.' },
    })
  }

  return (
    <header className="site-header">
      <div className="nav-container">
        <NavLink className="brand" to="/" aria-label="NUS Portal home">
          <span className="brand-mark" aria-hidden="true">NUS</span>
          <span>NUS Portal</span>
        </NavLink>

        <nav className="navigation" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}

          {user ? (
            <div className="account-navigation">
              <span className="user-email" title={user.email}>
                {user.email}
              </span>
              <button className="logout-button" type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Login / Sign up
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  )
}

export default NavBar
