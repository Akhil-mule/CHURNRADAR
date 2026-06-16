function Hero() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 24px', background: '#ffffff', fontFamily: 'DM Sans, sans-serif' }}>
      <h1 style={{
        fontSize: '64px',
        fontWeight: '700',
        color: '#16161d',
        fontFamily: 'DM Sans, sans-serif',
        lineHeight: '1.1',
        marginBottom: '24px'
      }}>
        Know before your<br />
        <span style={{ color: '#FF4444' }}>customer leaves.</span>
      </h1>

      <p style={{
        fontSize: '18px',
        color: '#6e6e76',
        fontFamily: 'DM Sans, sans-serif',
        maxWidth: '500px',
        margin: '0 auto 48px',
        lineHeight: '1.7'
      }}>
        ChurnRadar watches every customer signal and alerts you the moment someone is about to cancel. Before it's too late.
      </p>

      <button style={{
        background: '#FF4444',
        color: '#fff',
        border: 'none',
        padding: '16px 40px',
        borderRadius: '10px',
        fontSize: '16px',
        fontFamily: 'DM Sans, sans-serif',
        cursor: 'pointer',
        fontWeight: '600'
      }}>
        Get Started Free
      </button>
    </div>
  )
}

export default Hero