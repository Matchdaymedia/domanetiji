import Button from './Button'
import { ReactNode } from 'react'

interface CTAProps {
  title: string
  description?: string
  primaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  children?: ReactNode
}

export default function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
}: CTAProps) {
  return (
    <section className="bg-primary text-white section-padding">
      <div className="container-custom text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">{description}</p>
        )}
        {children && <div className="mb-8">{children}</div>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryAction && (
            <Button
              href={primaryAction.href}
              onClick={primaryAction.onClick}
              variant="secondary"
              size="lg"
            >
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button
              href={secondaryAction.href}
              onClick={secondaryAction.onClick}
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
