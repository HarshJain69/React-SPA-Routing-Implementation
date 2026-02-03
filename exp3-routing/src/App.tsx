import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuthContext } from './types/auth';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  const { isAuthenticated, user, logout } = useAuthContext();
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">React Routing</Link>
        </div>
        
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Products
          </NavLink>
          
          {isAuthenticated ? (
            <>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => isActive || location.pathname.startsWith('/dashboard') ? 'nav-link active' : 'nav-link'}
              >
                Dashboard
              </NavLink>
              <span className="user-info">
                Welcome, {user?.username}!
              </span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Login
            </NavLink>
          )}
        </div>
      </nav>

      <main className="main-content">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
