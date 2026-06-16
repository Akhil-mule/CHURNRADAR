import { useState } from 'react'

function Pricing() {
  const [hover, setHover] = useState(null)

  const plans = [
    { name: 'Starter', price: '$79', desc: 'Perfect for early stage SaaS', features: ['Up to 50 customers', '2 integrations', 'Email alerts', 'Risk scoring', '7 day history', '1 user seat'], cta: 'Get Started', highlight: false },
    { name: 'Pro', price: '$149', desc: 'For growing SaaS companies', features: ['Up to 300 customers', 'All integrations', 'Email and Slack alerts', 'AI recommendations', '30 day history', '5 user seats', 'Priority support'], cta: 'Get Started', highlight: true },
    { name: 'Scale', price: '$499', desc: 'For larger teams', features: ['Unlimited customers', 'All integrations', 'Custom alerts', 'Advanced AI', 'Unlimited history', 'Unlimited seats', 'Dedicated support'], cta: 'Contact Us', highlight: false },
  ]

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{ fontSize: '12px', color: '#FF4444', letterSpacing: '2px', fontWeight: '600', marginBottom: '12px' }}>PRICING</div>
        <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#16161d', letterSpacing: '-1px' }}>Simple honest pricing</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {plans.map((plan, index) => (
          <div key={index} style={{
            background: plan.highlight ? '#fff5f5' : '#fafafa',
            border: '1px solid ' + (plan.highlight ? '#FF444450' : '#ebebef'),
            borderRadius: '14px', padding: '28px', position: 'relative',
            transform: plan.highlight ? 'scale(1.03)' : 'scale(1)', transition: 'all 0.2s'
          }}>
            {plan.highlight && (
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#FF4444', color: '#fff', fontSize: '11px', fontWeight: '600', padding: '4px 14px', borderRadius: '20px', letterSpacing: '0.5px' }}>
                MOST POPULAR
              </div>
            )}
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#16161d', marginBottom: '8px' }}>{plan.name}</div>
            <div style={{ fontSize: '42px', fontWeight: '700', color: '#16161d', marginBottom: '4px' }}>
              {plan.price}<span style={{ fontSize: '14px', color: '#9a9aa2', fontWeight: '400' }}>/month</span>
            </div>
            <div style={{ fontSize: '13px', color: '#6e6e76', marginBottom: '24px' }}>{plan.desc}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {plan.features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#444' }}>
                  <span style={{ color: '#00A878' }}>✓</span>{feature}
                </div>
              ))}
            </div>
            <button
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              style={{
                width: '100%', padding: '12px',
                background: hover === index ? '#FF4444' : plan.highlight ? '#FF4444' : '#ffffff',
                color: hover === index ? '#fff' : plan.highlight ? '#fff' : '#16161d',
                border: '1px solid ' + (plan.highlight ? 'transparent' : '#ebebef'),
                borderRadius: '10px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s'
              }}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing