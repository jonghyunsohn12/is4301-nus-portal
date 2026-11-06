import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admission', to: '/admission' },
]

function NavBar() {
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
        </nav>
      </div>
    </header>
  )
}

export default NavBar
