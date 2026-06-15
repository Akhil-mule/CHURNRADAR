import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: '#060608',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'DM Sans, sans-serif',
      color: '#e8e8f0',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '72px', marginBottom: '16px' }}>404</div>
      <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Page not found</div>
      <div style={{ fontSize: '14px', color: '#555', marginBottom: '32px' }}>
        The page you are looking for does not exist.
      </div>
      <button
        onClick={() => navigate('/')}
        style={{
          background: '#FF4444',
          color: '#fff',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '10px',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        Go home
      </button>
    </div>
  )
}

export default NotFound