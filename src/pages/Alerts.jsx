import Sidebar from '../components/Sidebar'

function Alerts() {
  const alerts = [
    { name: 'Rahul Mehta', company: 'FinEdge', type: 'critical', msg: 'No login in 14 days. Support ticket unresolved 9 days.', time: '2h ago', score: 79 },
    { name: 'Marcus Chen', company: 'LegalAI', type: 'critical', msg: 'Usage dropped 80%. No response to last 3 emails.', time: '5h ago', score: 80 },
    { name: 'Arjun Nair', company: 'CloudPeak', type: 'warning', msg: 'Login frequency down 60% this week.', time: '1d ago', score: 53 },
    { name: 'Priya Sharma', company: 'GrowthStack', type: 'healthy', msg: 'Customer re-engaged after outreach. Risk dropped.', time: '2d ago', score: 18 },
  ]

  function getColor(type) {
    if (type === 'critical') return '#FF4444'
    if (type === 'warning') return '#FF9500'
    return '#00D68F'
  }

  function getEmoji(type) {
    if (type === 'critical') return '🔴'
    if (type === 'warning') return '🟡'
    return '🟢'
  }

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: '#060608',
      fontFamily: 'DM Sans, sans-serif',
      color: '#e8e8f0'
    }}>
      <Sidebar />
      <div style={{ marginLeft: '220px', flex: 1, padding: '32px' }}>
        <div style={{ marginBottom: '28px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '4px'
          }}>
            Alerts
          </h1>
          <p style={{ fontSize: '14px', color: '#555' }}>
            Real time signals that need your attention.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {alerts.map((a, i) => (
            <div key={i} style={{
              background: '#0e0e14',
              border: '1px solid ' + (a.type === 'critical' ? '#FF444430' : '#1c1c28'),
              borderRadius: '14px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: getColor(a.type) + '20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                flexShrink: 0
              }}>
                {getEmoji(a.type)}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '4px'
                }}>
                  <span style={{
                    fontWeight: '600',
                    fontSize: '14px'
                  }}>
                    {a.name}
                  </span>
                  <span style={{
                    fontSize: '13px',
                    color: '#555'
                  }}>
                    at {a.company}
                  </span>
                  <span style={{
                    background: getColor(a.type) + '20',
                    color: getColor(a.type),
                    fontSize: '10px',
                    fontWeight: '600',
                    padding: '3px 10px',
                    borderRadius: '20px'
                  }}>
                    {a.type.toUpperCase()}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: '#666' }}>
                  {a.msg}
                </div>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{
                  fontSize: '12px',
                  color: '#444',
                  marginBottom: '8px'
                }}>
                  {a.time}
                </div>
                <button style={{
                  background: '#FF444420',
                  color: '#FF4444',
                  border: '1px solid #FF444440',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  Act now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Alerts