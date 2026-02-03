import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [privacy, setPrivacy] = useState('public');
  
  const handleSave = () => {
    alert('Settings saved successfully!');
  };
  
  return (
    <div>
      <h2>Settings</h2>
      <p>Configure your application preferences</p>
      
      <div style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h3>Notifications</h3>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            Enable push notifications
          </label>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3>Appearance</h3>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            Dark mode
          </label>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3>Language</h3>
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            style={{ padding: '0.5rem', width: '200px' }}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3>Privacy</h3>
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input
                type="radio"
                name="privacy"
                value="public"
                checked={privacy === 'public'}
                onChange={(e) => setPrivacy(e.target.value)}
              />
              Public profile
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input
                type="radio"
                name="privacy"
                value="friends"
                checked={privacy === 'friends'}
                onChange={(e) => setPrivacy(e.target.value)}
              />
              Friends only
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="radio"
                name="privacy"
                value="private"
                checked={privacy === 'private'}
                onChange={(e) => setPrivacy(e.target.value)}
              />
              Private
            </label>
          </div>
        </div>
        
        <button 
          onClick={handleSave}
          style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#007bff', 
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;