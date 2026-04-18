import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Card({ children, className, style }: CardProps) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        border: '1px solid #E5E5E5',
        padding: '1.5rem',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
