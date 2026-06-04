function Navbar() {
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
        color: '#e8e8f0'
      }}>
        Churn<span style={{ color: '#FF4444' }}>Radar</span>
      </div>

      <button style={{
        background: '#FF4444',
        color: '#fff',
        border: 'none',
        padding: '10px 24px',
        borderRadius: '8px',
        fontSize: '14px',
        cursor: 'pointer'
      }}>
        Get Started
      </button>

    </nav>
  )
}

export default Navbar