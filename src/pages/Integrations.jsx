import { useState } from 'react'
import Sidebar from '../components/Sidebar'

function Integrations() {
  const [integrations, setIntegrations] = useState([
    { name: 'Stripe', icon: '💳', desc: 'Payment and subscription data', connected: true, color: '#635BFF' },
    { name: 'Gmail', icon: '📧', desc: 'Email engagement signals', connected: true, color: '#EA4335' },
    { name: 'HubSpot', icon: '🔶', desc: 'CRM and contact activity', connected: false, color: '#FF7A59' },
    { name: 'Intercom', icon: '💬', desc: 'Support ticket tracking', connected: true, color: '#1F8EED' },
    { name: 'Slack', icon: '⚡', desc: 'Real time alert delivery', connected: false, color: '#4A154B' },
    { name: 'Mixpanel', icon: '📊', desc: 'Product usage analytics', connected: false, color: '#7856FF' },
    { name: 'Salesforce', icon: '☁️', desc: 'Enterprise CRM sync', connected: false, color: '#00A1E0' },
    { name: 'Zendesk', icon: '🎧', desc: 'Customer support platform', connected: false, color: '#03363D' },
  ])

  function toggle(name) {
    setIntegrations(prev =>
      prev.map(i => i.name === name ? { ...i, connected: !i.connected } : i)
    )
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
            Integrations
          </h1>
          <p style={{ fontSize: '14px', color: '#555' }}>
            Connect your tools. We watch everything automatically.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '14px'
        }}>
          {integrations.map((intg, i) => (
            <div key={i} style={{
              background: '#0e0e14',
              border: '1px solid ' + (intg.connected ? '#00D68F30' : '#1c1c28'),
              borderRadius: '14px',
              padding: '22px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '18px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: intg.color + '20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                flexShrink: 0
              }}>
                {intg.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{
                  fontWeight: '600',
                  fontSize: '15px',
                  marginBottom: '4px'
                }}>
                  {intg.name}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#555'
                }}>
                  {intg.desc}
                </div>
              </div>

              <button
                onClick={() => toggle(intg.name)}
                style={{
                  padding: '8px 16px',
                  background: intg.connected ? '#00D68F20' : '#ffffff08',
                  color: intg.connected ? '#00D68F' : '#666',
                  border: '1px solid ' + (intg.connected ? '#00D68F40' : '#1c1c28'),
                  borderRadius: '8px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  flexShrink: 0,
                  fontWeight: '500'
                }}
              >
                {intg.connected ? '✓ Connected' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Integrations