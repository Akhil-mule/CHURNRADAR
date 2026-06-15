import Sidebar from '../components/Sidebar'

function Settings() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: '#060608',
      fontFamily: 'DM Sans, sans-serif',
      color: '#e8e8f0'
    }}>
      <Sidebar />
      <div style={{
        marginLeft: '220px',
        flex: 1,
        padding: '32px',
        maxWidth: '600px'
      }}>
        <div style={{ marginBottom: '28px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '4px'
          }}>
            Settings
          </h1>
          <p style={{ fontSize: '14px', color: '#555' }}>
            Manage your workspace and preferences.
          </p>
        </div>

        {[
          { label: 'Company Name', placeholder: 'Your Company Inc.' },
          { label: 'Work Email', placeholder: 'you@company.com' },
          { label: 'Alert Threshold', placeholder: '65' },
        ].map((f, i) => (
          <div key={i} style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '12px',
              color: '#555',
              fontWeight: '600',
              letterSpacing: '0.5px',
              marginBottom: '8px'
            }}>
              {f.label.toUpperCase()}
            </label>
            <input
              placeholder={f.placeholder}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#0e0e14',
                border: '1px solid #1c1c28',
                borderRadius: '10px',
                color: '#e8e8f0',
                fontSize: '14px',
                outline: 'none',
                fontFamily: 'DM Sans, sans-serif'
              }}
            />
          </div>
        ))}

        <div style={{
          background: '#0e0e14',
          border: '1px solid #1c1c28',
          borderRadius: '14px',
          padding: '22px',
          marginTop: '28px',
          marginBottom: '20px'
        }}>
          <div style={{
            fontSize: '13px',
            fontWeight: '600',
            marginBottom: '4px'
          }}>
            Current Plan
          </div>
          <div style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#FF4444',
            marginBottom: '4px'
          }}>
            $149 / month
          </div>
          <div style={{
            fontSize: '13px',
            color: '#555',
            marginBottom: '16px'
          }}>
            Pro Plan · Up to 300 customers · All integrations
          </div>
          <button style={{
            background: '#FF444420',
            color: '#FF4444',
            border: '1px solid #FF444440',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '13px',
            cursor: 'pointer'
          }}>
            Upgrade to Scale →
          </button>
        </div>

        <button style={{
          background: '#FF4444',
          color: '#fff',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '10px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Settings