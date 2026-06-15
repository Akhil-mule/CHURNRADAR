function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: '🔗',
      title: 'Connect your tools',
      desc: 'Link Stripe, Gmail, HubSpot and Intercom in one click. No engineering required. Takes 10 minutes.'
    },
    {
      number: '02',
      icon: '👁',
      title: 'We watch everything',
      desc: 'ChurnRadar monitors login patterns, email opens, support tickets and payment signals 24 hours a day.'
    },
    {
      number: '03',
      icon: '⚡',
      title: 'Act before its too late',
      desc: 'Get an alert with exactly what is wrong and the precise message to send to save the account.'
    },
  ]

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 24px 100px'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '48px'
      }}>
        <div style={{
          fontSize: '12px',
          color: '#FF4444',
          letterSpacing: '2px',
          fontWeight: '600',
          marginBottom: '12px'
        }}>
          HOW IT WORKS
        </div>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#e8e8f0',
          letterSpacing: '-1px'
        }}>
          Three steps to zero blind spots
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px'
      }}>
        {steps.map((step, index) => (
          <div key={index} style={{
            background: '#0e0e14',
            border: '1px solid #1c1c28',
            borderRadius: '14px',
            padding: '28px'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>
              {step.icon}
            </div>
            <div style={{
              fontSize: '11px',
              color: '#FF4444',
              fontWeight: '600',
              letterSpacing: '1px',
              marginBottom: '8px'
            }}>
              {step.number}
            </div>
            <div style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '10px'
            }}>
              {step.title}
            </div>
            <div style={{
              fontSize: '13px',
              color: '#555',
              lineHeight: '1.7'
            }}>
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks