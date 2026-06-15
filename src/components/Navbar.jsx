import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 48px',
      borderBottom: '1px solid #1c1c28',
      background: '#060608'
    }}>
      <div style={{
        fontSize: '22px',
        fontWeight: '700',
        color: '#e8e8f0',
        cursor: 'pointer'
      }}
        onClick={() => navigate('/')}
      >
        Churn<span style={{ color: '#FF4444' }}>Radar</span>
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={() => navigate('/login')}
          style={{
            background: 'none',
            color: '#555',
            border: 'none',
            padding: '10px 20px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Log in
        </button>
        <button
          onClick={() => navigate('/login')}
          style={{
            background: '#FF4444',
            color: '#fff',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar