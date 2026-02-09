import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import InteractiveGalleryGrid from '@/components/InteractiveGalleryGrid'

export const metadata: Metadata = {
  title: 'Image Gallery',
  description: 'Browse recent roofing, remodeling, and restoration projects across Maryland.',
}

const ImageGalleryPage = () => {
  return (
    <>
      <section className="bg-slate-900 text-white py-16">
        <div className="container-custom">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">Image Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Project categories from the field</h1>
          <p className="text-lg text-slate-200 mt-4 max-w-3xl">
            Filter by project type, browse location-specific work, and preview larger imagery from House Transformers projects across Maryland and the DMV.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <InteractiveGalleryGrid />
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default ImageGalleryPage
