import Sidebar from '../components/Sidebar'

function Dashboard() {
  const customers = [
    { name: 'Rahul Mehta', company: 'FinEdge', risk: 79, status: 'CRITICAL', arr: '$3.5K' },
    { name: 'Marcus Chen', company: 'LegalAI', risk: 80, status: 'CRITICAL', arr: '$4.7K' },
    { name: 'Arjun Nair', company: 'CloudPeak', risk: 53, status: 'AT RISK', arr: '$5.9K' },
    { name: 'Priya Sharma', company: 'GrowthStack', risk: 18, status: 'HEALTHY', arr: '$1.7K' },
    { name: 'Sarah Kim', company: 'DataSync', risk: 22, status: 'HEALTHY', arr: '$2.3K' },
  ]

  function getColor(status) {
    if (status === 'CRITICAL') return '#FF4444'
    if (status === 'AT RISK') return '#FF9500'
    return '#00D68F'
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#060608', fontFamily: 'DM Sans, sans-serif', color: '#e8e8f0' }}>
      <Sidebar />
      <div style={{ marginLeft: '220px', flex: 1, padding: '32px' }}>
        <div style={{ marginBottom: '28px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>Good morning, founder.</h1>
          <p style={{ fontSize: '14px', color: '#555' }}>Here is what needs your attention today.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '24px' }}>
          {[
            { label: 'Total Customers', value: '5', color: '#e8e8f0' },
            { label: 'Critical Risk', value: '2', color: '#FF4444' },
            { label: 'At Risk ARR', value: '$14.1K', color: '#FF9500' },
            { label: 'Protected ARR', value: '$18.1K', color: '#00D68F' },
          ].map((k, i) => (
            <div key={i} style={{ background: '#0e0e14', border: '1px solid #1c1c28', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '11px', color: '#555', marginBottom: '10px', fontWeight: '500' }}>{k.label.toUpperCase()}</div>
              <div style={{ fontSize: '26px', fontWeight: '600', color: k.color }}>{k.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#0e0e14', border: '1px solid #1c1c28', borderRadius: '14px' }}>
          <div style={{ padding: '18px 22px', borderBottom: '1px solid #1c1c28', fontSize: '14px', fontWeight: '600' }}>All Customers</div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1c1c28' }}>
                {['Customer', 'Company', 'ARR', 'Risk Score', 'Status'].map(h => (
                  <th key={h} style={{ padding: '12px 22px', textAlign: 'left', fontSize: '11px', color: '#444', fontWeight: '600' }}>{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #0e0e14', cursor: 'pointer' }}>
                  <td style={{ padding: '14px 22px', fontSize: '14px', fontWeight: '500' }}>{c.name}</td>
                  <td style={{ padding: '14px 22px', fontSize: '13px', color: '#555' }}>{c.company}</td>
                  <td style={{ padding: '14px 22px', fontSize: '13px' }}>{c.arr}</td>
                  <td style={{ padding: '14px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '60px', height: '4px', background: '#1c1c28', borderRadius: '2px' }}>
                        <div style={{ height: '100%', width: c.risk + '%', background: getColor(c.status), borderRadius: '2px' }} />
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: getColor(c.status) }}>{c.risk}</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 22px' }}>
                    <span style={{ background: getColor(c.status) + '20', color: getColor(c.status), fontSize: '11px', fontWeight: '600', padding: '4px 10px', borderRadius: '20px' }}>{c.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard