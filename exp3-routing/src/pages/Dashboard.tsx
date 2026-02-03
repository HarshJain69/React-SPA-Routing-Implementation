import React from 'react';
import { useAuthContext } from '../types/auth';

const Dashboard: React.FC = () => {
  const { user } = useAuthContext();
  
  return (
    <div>
      <h2>Dashboard Overview</h2>
      <p>Welcome back, {user?.username}!</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Quick Stats</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Total Users</h4>
            <p>1,234</p>
          </div>
          <div className="stat-card">
            <h4>Active Sessions</h4>
            <p>45</p>
          </div>
          <div className="stat-card">
            <h4>Revenue</h4>
            <p>$12,345</p>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Recent Activity</h3>
        <ul>
          <li>User John Doe registered</li>
          <li>New product added to catalog</li>
          <li>System maintenance completed</li>
          <li>New feature deployed</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;