import { useState } from 'react'

function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (email.length > 3) {
      setSubmitted(true)
    }
  }

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '0 24px 100px',
      textAlign: 'center'
    }}>
      <div style={{
        fontSize: '12px',
        color: '#FF4444',
        letterSpacing: '2px',
        fontWeight: '600',
        marginBottom: '12px'
      }}>
        EARLY ACCESS
      </div>

      <h2 style={{
        fontSize: '36px',
        fontWeight: '700',
        color: '#e8e8f0',
        letterSpacing: '-1px',
        marginBottom: '16px'
      }}>
        Join the waitlist
      </h2>

      <p style={{
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.7',
        marginBottom: '40px'
      }}>
        ChurnRadar is in early access. Join 200+ SaaS founders already on the waitlist and get 3 months free when we launch.
      </p>

      {submitted ? (
        <div style={{
          background: '#00D68F10',
          border: '1px solid #00D68F30',
          borderRadius: '14px',
          padding: '32px'
        }}>
          <div style={{
            fontSize: '32px',
            marginBottom: '12px'
          }}>
            🎉
          </div>
          <div style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#00D68F',
            marginBottom: '8px'
          }}>
            You are on the list
          </div>
          <div style={{
            fontSize: '14px',
            color: '#555'
          }}>
            We will reach out personally when your spot is ready.
          </div>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          gap: '12px',
          maxWidth: '480px',
          margin: '0 auto'
        }}>
          <input
            type='email'
            placeholder='Enter your work email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              padding: '14px 18px',
              background: '#0e0e14',
              border: '1px solid #1c1c28',
              borderRadius: '10px',
              color: '#e8e8f0',
              fontSize: '14px',
              outline: 'none'
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              background: '#FF4444',
              color: '#fff',
              border: 'none',
              padding: '14px 24px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Join waitlist
          </button>
        </div>
      )}
    </div>
  )
}

export default Waitlist