'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ScrollReveal } from '@/components/scroll-reveal'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/contexts/language-context'

interface GalleryImage {
  src: string
  alt: string
  caption: string
  description: string
}

const galleryImages: GalleryImage[] = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2019.05.11%20%282%29-wqkzTb618NIN2nsakEI0VCCbFhYkvv.jpeg',
    alt: 'Multi-purpose production area with table and seating',
    caption: 'Main Production Area',
    description: 'Open studio space featuring professional workspace with dining table, lounge seating, styling mannequin, and equipment storage'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2019.05.11%20%281%29-ca5iTkMtPkaCZanSKWsJhkpIQ40CAw.jpeg',
    alt: 'Styling station with makeup mirror and lighting',
    caption: 'Styling & Makeup Station',
    description: 'Professional dressing room with illuminated mirror, styling furniture, and makeup preparation workspace'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2019.05.09-nfWqqGrDFn7oEZx5xHjfAEcOqKMcOV.jpeg',
    alt: 'Studio space with white cyclorama backdrop',
    caption: 'Cyclorama Production Space',
    description: 'Professional shooting area with pristine white backdrop, overhead lighting rigs, and collaborative seating'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2019.05.10-pM16YVZQCGuIHasPC0SKCbrjBL9l6T.jpeg',
    alt: 'Studio overview with cyclorama and working areas',
    caption: 'Complete Studio Layout',
    description: 'Full perspective of the integrated production space showing cyclorama backdrop, equipment zones, and creative workspace'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2019.05.10%20%282%29-EHJOb1yTKFo4ghGZpW4S0G8Gn8nAvQ.jpeg',
    alt: 'Multi-functional studio with dining and production zones',
    caption: 'Collaborative Workspace',
    description: 'Versatile studio combining production area, meeting space, lounge seating, and styling setup for seamless operations'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2019.05.10%20%281%29-8O8VHVehamMEhAFsPjG9DQkYwlh2OT.jpeg',
    alt: 'Professional equipment storage and shelving',
    caption: 'Equipment Storage & Control Room',
    description: 'Organized storage system for professional lighting, cameras, and production equipment with climate control'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2019.05.12-6EFoqkCJrrfmZQrrG9BfIyb9MFSBPB.jpeg',
    alt: 'Clean white cyclorama backdrop with lighting rig',
    caption: 'Pristine Backdrop System',
    description: 'Professional infinite white wall with synchronized lighting grid, perfect for clean product and portrait photography'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2019.05.11-exdrIMHlgGwLhgp8UBQxhOUVPt0vT3.jpeg',
    alt: 'Production workstation with equipment and storage',
    caption: 'Post-Production Workstation',
    description: 'Complete workspace featuring editing setup, professional equipment storage, and production controls'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMON_PHOTOS_GLACE14STUDIO%206-QUoZpwyE5LolWnlnlGBI0k5f3veZRi.jpg',
    alt: 'Production workspace with teal seating and blue neon lighting',
    caption: 'Modern Production Hub',
    description: 'Contemporary workspace featuring vibrant teal designer seating, professional workstations with dual monitors, metal shelving, and atmospheric blue neon lighting accents'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMON_PHOTOS_GLACE14STUDIO%202-Ora2TXJj2kmnWM5dFLisloE73qiOvr.jpg',
    alt: 'Studio interior with wooden desks and blue accents',
    caption: 'Integrated Creative Studio',
    description: 'Multi-functional workspace combining wooden production desks, professional shelving, teal seating zone, wardrobe storage, and coordinated blue neon ceiling lighting for creative collaboration'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMON_PHOTOS_GLACE14STUDIO%204-KbF48P4fcVoKIc3P0LzXX6RmptHrUL.jpg',
    alt: 'Top-down view of production area with multiple workstations',
    caption: 'Complete Production Overview',
    description: 'Aerial perspective showcasing interconnected production workstations, professional audio equipment, dual-monitor setup, wooden workspace design, and orchestrated blue neon ambient lighting system'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMON_PHOTOS_GLACE14STUDIO%201-u9qzwZzGnJEOq5RHGq46JlLb8P9d80.jpg',
    alt: 'Professional production workspace with purple neon ambient lighting',
    caption: 'Atmospheric Production Suite',
    description: 'State-of-the-art production workspace with vibrant purple neon ceiling accents, multiple workstations with professional monitors, equipment racks, and immersive creative atmosphere'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMON_PHOTOS_GLACE14STUDIO%2010-7aGyG3TXEIE52zuZPDlw2ECyV5pX9m.jpg',
    alt: 'Creative studio space with purple neon lighting and teal seating',
    caption: 'Inviting Creative Environment',
    description: 'Professional yet welcoming space featuring warm purple ambient lighting, comfortable teal designer seating, production workstations, red neon accents, and wardrobe styling area'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMON_PHOTOS_GLACE14STUDIO-C9RSlrm1T26skuQDqxWtlj2R7t5Sl7.jpg',
    alt: 'Room 2 creative studio with neon lighting and production setup',
    caption: 'Collaborative Creative Hub',
    description: 'Versatile creative environment with purple and blue neon ambient lighting creating an inspiring atmosphere, teal seating zones, cyclorama backdrop area, and integrated production controls'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTOS%20SIMON%20STUDIO%20SAMU-okLmVro0gKAqMloZksBsLiZ78LdKQE.jpg',
    alt: 'Studio interior showcasing neon lighting and production workspace',
    caption: 'Creative Production Zone',
    description: 'Modern studio space featuring orchestrated neon ambient lighting system, integrated production and relaxation areas, professional workstations, and comfortable seating for collaborative projects'
  }
]

export function StudioGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const { t } = useLanguage()

  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal variant="up" className="mb-12 md:mb-16">
          <h2 className="heading-md font-heading mb-4">{t("gallery.title")}</h2>
          <p className="text-muted-foreground text-body-base font-body max-w-2xl">
            {t("gallery.subtitle")}
          </p>
        </ScrollReveal>

        {/* Gallery Grid - All Images Visible */}
        <ScrollReveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-sm bg-muted transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                quality={85}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Caption */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white heading-sm font-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  {image.caption}
                </h3>
                <p className="text-white/60 text-body-xs font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center mt-2">
                  Click to view details
                </p>
              </div>
            </button>
          ))}
        </ScrollReveal>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 md:p-12 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-all duration-300 hover:rotate-90 active:scale-90"
            aria-label="Close lightbox"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="w-6 h-6"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col gap-6 animate-fade-in-scale"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 90vw"
                quality={90}
                priority
              />
            </div>

            {/* Details */}
            <div className="text-center text-white overflow-y-auto">
              <h3 className="heading-md font-heading mb-3">{selectedImage.caption}</h3>
              <p className="text-body-base font-body text-white/80 max-w-2xl mx-auto">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
