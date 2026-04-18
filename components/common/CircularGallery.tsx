'use client'

import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CircularGalleryProps {
  images: string[]
}

export default function CircularGallery({ images }: CircularGalleryProps) {
  const [rotation, setRotation] = useState(0)
  const count = Math.max(images.length, 1)
  const step = 360 / count

  const wheelItems = useMemo(
    () =>
      images.map((src, index) => ({
        src,
        index,
        angle: index * step + rotation,
      })),
    [images, rotation, step]
  )

  const rotateNext = () => setRotation((prev) => prev - step)
  const rotatePrev = () => setRotation((prev) => prev + step)

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '820px',
        margin: '0 auto',
        userSelect: 'none',
      }}
      onWheel={(e) => {
        if (e.deltaY > 0) rotateNext()
        else rotatePrev()
      }}
    >
      <div
        style={{
          position: 'relative',
          aspectRatio: '1 / 1',
          width: '100%',
          maxWidth: '720px',
          margin: '0 auto',
          borderRadius: '9999px',
          border: '1px dashed rgba(139, 111, 71, 0.35)',
          backgroundColor: '#FCFAF7',
        }}
      >
        {wheelItems.map((item) => (
          <div
            key={`${item.src}-${item.index}`}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: 'clamp(120px, 18vw, 180px)',
              height: 'clamp(120px, 18vw, 180px)',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(-260%) rotate(${-item.angle}deg)`,
              transformOrigin: 'center center',
              backgroundColor: '#EFE6D9',
            }}
          >
            <img
              src={item.src}
              alt={`Galerie Bild ${item.index + 1}`}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        ))}

        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(110px, 16vw, 170px)',
            height: 'clamp(110px, 16vw, 170px)',
            borderRadius: '9999px',
            backgroundColor: '#8B6F47',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            letterSpacing: '0.02em',
          }}
        >
          Galerie
        </div>
      </div>

      <div
        style={{
          marginTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
        }}
      >
        <button
          type="button"
          onClick={rotatePrev}
          aria-label="Zurück drehen"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '9999px',
            border: '1px solid #D8CCB8',
            backgroundColor: 'white',
            color: '#8B6F47',
            cursor: 'pointer',
          }}
        >
          <ChevronLeft style={{ width: '20px', height: '20px', margin: '0 auto' }} />
        </button>
        <button
          type="button"
          onClick={rotateNext}
          aria-label="Vorwärts drehen"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '9999px',
            border: '1px solid #D8CCB8',
            backgroundColor: 'white',
            color: '#8B6F47',
            cursor: 'pointer',
          }}
        >
          <ChevronRight style={{ width: '20px', height: '20px', margin: '0 auto' }} />
        </button>
      </div>
    </div>
  )
}
