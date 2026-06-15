function Stats() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '0 24px 80px'
    }}>
      <div style={{
        display: 'flex',
        maxWidth: '700px',
        width: '100%',
        background: '#0e0e14',
        border: '1px solid #1c1c28',
        borderRadius: '16px',
        overflow: 'hidden'
      }}>
        {[
          { value: '$2.4M', label: 'ARR protected monthly' },
          { value: '34%', label: 'Average churn reduction' },
          { value: '10 min', label: 'Setup time' },
          { value: '$99/mo', label: 'Starting price' },
        ].map((stat, index) => (
          <div key={index} style={{
            flex: 1,
            padding: '24px 20px',
            textAlign: 'center',
            borderRight: index < 3 ? '1px solid #1c1c28' : 'none'
          }}>
            <div style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '4px'
            }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '12px', color: '#555' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats