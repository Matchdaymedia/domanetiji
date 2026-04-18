interface Stat {
  number: string
  label: string
}

interface StatsGridProps {
  stats: Stat[]
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
      {stats.map((stat, index) => (
        <div key={index} style={{ textAlign: 'center', backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8B6F47', marginBottom: '0.5rem' }}>
            {stat.number}
          </div>
          <div style={{ color: '#6B6B6B', fontSize: '0.9rem' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
