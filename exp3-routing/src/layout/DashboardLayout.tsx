import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../types/auth';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuthContext();
  
  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };
  
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>
      
      <div className="dashboard-content">
        <aside className="dashboard-sidebar">
          <nav>
            <ul>
              <li>
                <Link 
                  to="/dashboard" 
                  className={isActive('/dashboard') && location.pathname === '/dashboard' ? 'active' : ''}
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/profile" 
                  className={isActive('/dashboard/profile') ? 'active' : ''}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/settings" 
                  className={isActive('/dashboard/settings') ? 'active' : ''}
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;