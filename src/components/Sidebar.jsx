import { useNavigate, useLocation } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const items = [
    { icon: '◈', label: 'Dashboard', path: '/dashboard' },
    { icon: '◉', label: 'Alerts', path: '/alerts' },
    { icon: '◎', label: 'Integrations', path: '/integrations' },
    { icon: '◌', label: 'Settings', path: '/settings' },
  ]

  return (
    <div style={{
      width: '220px',
      background: '#08080c',
      borderRight: '1px solid #1c1c28',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 100
    }}>
      <div style={{
        padding: '20px 16px',
        borderBottom: '1px solid #1c1c28',
        cursor: 'pointer'
      }}
        onClick={() => navigate('/')}
      >
        <div style={{
          fontSize: '20px',
          fontWeight: '700'
        }}>
          Churn<span style={{ color: '#FF4444' }}>Radar</span>
        </div>
        <div style={{
          fontSize: '11px',
          color: '#333',
          marginTop: '4px'
        }}>
          Your workspace
        </div>
      </div>

      <nav style={{ padding: '12px 10px', flex: 1 }}>
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              borderRadius: '10px',
              cursor: 'pointer',
              marginBottom: '4px',
              background: location.pathname === item.path ? '#ffffff10' : 'transparent',
              color: location.pathname === item.path ? '#fff' : '#555',
              fontSize: '13px',
              fontWeight: '500',
              transition: 'all 0.15s'
            }}
          >
            <span style={{ fontSize: '16px' }}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div style={{
        padding: '12px 10px',
        borderTop: '1px solid #1c1c28'
      }}>
        <div
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 14px',
            borderRadius: '10px',
            cursor: 'pointer',
            color: '#555',
            fontSize: '13px'
          }}
        >
          <span>←</span>
          <span>Back to home</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar