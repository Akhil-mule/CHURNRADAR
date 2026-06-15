function Footer() {
  return (
    <div style={{
      borderTop: '1px solid #1c1c28',
      padding: '40px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#060608'
    }}>

      <div style={{
        fontSize: '20px',
        fontWeight: '700',
        color: '#e8e8f0'
      }}>
        Churn<span style={{ color: '#FF4444' }}>Radar</span>
      </div>

      <div style={{
        fontSize: '13px',
        color: '#555'
      }}>
        © 2026 ChurnRadar. All rights reserved.
      </div>

      <div style={{
        display: 'flex',
        gap: '24px'
      }}>
        {['Privacy', 'Terms', 'Contact'].map((item, index) => (
          <span key={index} style={{
            fontSize: '13px',
            color: '#555',
            cursor: 'pointer'
          }}>
            {item}
          </span>
        ))}
      </div>

    </div>
  )
}

export default Footer