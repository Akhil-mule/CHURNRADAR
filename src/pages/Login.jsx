import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleLogin() {
    if (email.length > 3 && password.length > 3) {
      navigate('/dashboard')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#060608',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'DM Sans, sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: '#0e0e14',
        border: '1px solid #1c1c28',
        borderRadius: '16px',
        padding: '40px'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <div style={{
            fontSize: '26px',
            fontWeight: '700',
            marginBottom: '8px'
          }}>
            Churn<span style={{ color: '#FF4444' }}>Radar</span>
          </div>
          <div style={{
            fontSize: '14px',
            color: '#555'
          }}>
            Sign in to your dashboard
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <input
            type='email'
            placeholder='Work email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '12px 16px',
              background: '#060608',
              border: '1px solid #1c1c28',
              borderRadius: '10px',
              color: '#e8e8f0',
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'DM Sans, sans-serif'
            }}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '12px 16px',
              background: '#060608',
              border: '1px solid #1c1c28',
              borderRadius: '10px',
              color: '#e8e8f0',
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'DM Sans, sans-serif'
            }}
          />
          <button
            onClick={handleLogin}
            style={{
              background: '#FF4444',
              color: '#fff',
              border: 'none',
              padding: '14px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '4px',
              fontFamily: 'DM Sans, sans-serif'
            }}
          >
            Sign in →
          </button>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '24px',
          fontSize: '13px',
          color: '#555'
        }}>
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/')}
            style={{
              color: '#FF4444',
              cursor: 'pointer'
            }}
          >
            Join waitlist
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login