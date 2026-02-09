import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { galleryCategories, interactiveGalleryImages } from '@/data/enhancements'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore recent roofing, remodeling, and restoration projects completed by House Transformers Inc.',
}

const GalleryPage = () => {
  const imageCover = interactiveGalleryImages[0]
  const videoCover = interactiveGalleryImages[10]

  return (
    <>
      <section className="bg-slate-900 text-white py-16">
        <div className="container-custom">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Project highlights across Maryland</h1>
          <p className="text-lg text-slate-200 mt-4 max-w-2xl">
            Browse completed roofing, remodeling, and restoration work delivered by House Transformers Inc.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <span key={category} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-slate-100">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/gallery/images" className="group border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-64">
              <Image src={imageCover.src} alt="Image gallery" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900">Image Gallery</h2>
              <p className="text-slate-600 mt-2">View categorized roofing, restoration, remodeling, and outdoor project photos.</p>
            </div>
          </Link>
          <Link href="/gallery/videos" className="group border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-64">
              <Image src={videoCover.src} alt="Video gallery" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900">Video Gallery</h2>
              <p className="text-slate-600 mt-2">Watch highlights from recent projects and emergency response workflows.</p>
            </div>
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default GalleryPage
