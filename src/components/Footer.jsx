function Footer() {
  return (
    <div style={{ borderTop: '1px solid #ebebef', padding: '40px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff' }}>
      <div style={{ fontSize: '20px', fontWeight: '700', color: '#16161d' }}>
        Churn<span style={{ color: '#FF4444' }}>Radar</span>
      </div>
      <div style={{ fontSize: '13px', color: '#9a9aa2' }}>© 2026 ChurnRadar. All rights reserved.</div>
      <div style={{ display: 'flex', gap: '24px' }}>
        {['Privacy', 'Terms', 'Contact'].map((item, index) => (
          <span key={index} style={{ fontSize: '13px', color: '#9a9aa2', cursor: 'pointer' }}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default Footer