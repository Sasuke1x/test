import { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { videoGallery } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Video Gallery',
  description: 'Watch restoration and remodeling highlights from House Transformers Inc.',
}

const VideoGalleryPage = () => {
  return (
    <>
      <section className="bg-slate-900 text-white py-16">
        <div className="container-custom">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">Video Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Project highlights and restoration response</h1>
          <p className="text-lg text-slate-200 mt-4 max-w-2xl">
            Explore the latest videos from our teams in the field.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-6">
          {videoGallery.map((video) => (
            <div key={video.title} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <iframe
                title={video.title}
                src={video.embed}
                className="w-full h-56"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{video.title}</h3>
                <Link href={video.url} className="text-brand-700 text-sm font-semibold">Watch on YouTube</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default VideoGalleryPage
