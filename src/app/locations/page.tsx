import { Metadata } from 'next'
import { FiMapPin } from 'react-icons/fi'
import CTASection from '@/components/CTASection'
import LeadForm from '@/components/LeadForm'
import ServiceAreaPanel from '@/components/ServiceAreaPanel'
import { serviceAreaRegions } from '@/data/enhancements'
import { siteInfo, zipCodes } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Locations',
  description: 'Serving Glen Burnie and nearby Maryland communities with roofing, remodeling, and restoration services.',
}

const nearbyAreas = [
  'Annapolis',
  'Severna Park',
  'Severn',
  'Pasadena',
  'Odenton',
  'Hanover',
  'Laurel',
  'Columbia',
  'Crofton',
  'Millersville',
  'Bowie',
  'Arnold',
]

const LocationsPage = () => {
  const mapSrc = 'https://www.google.com/maps?q=7442%20Baltimore%20Annapolis%20Blvd%20Glen%20Burnie%20MD&output=embed'

  return (
    <>
      <section className="bg-slate-900 text-white py-16">
        <div className="container-custom">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">Locations</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Glen Burnie, MD and surrounding service communities</h1>
          <p className="text-lg text-slate-200 mt-4 max-w-2xl">
            House Transformers Inc. is based in Glen Burnie and serves homeowners and businesses across Anne Arundel County and nearby Maryland communities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  title="Glen Burnie Service Area"
                  src={mapSrc}
                  className="w-full h-80"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <FiMapPin className="text-brand-600" />
                    <h3 className="text-xl font-semibold text-slate-900">Primary Office</h3>
                  </div>
                  <p className="text-slate-600 mt-2">{siteInfo.address}</p>
                  <p className="text-slate-500 mt-2">Hours: {siteInfo.hours}</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-900">Nearby communities</h3>
                  <ul className="mt-3 space-y-2 text-slate-600">
                    {nearbyAreas.map((area) => (
                      <li key={area}>• {area}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-slate-900">Coverage model</h3>
                <p className="text-slate-600 mt-2">We prioritize dispatch from Glen Burnie and route projects across three active service regions.</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                  {serviceAreaRegions.map((region) => (
                    <div key={region.slug} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="font-semibold text-slate-900">{region.label}</p>
                      <p className="text-sm text-slate-600 mt-1">{region.zipCount}+ ZIP areas</p>
                    </div>
                  ))}
                </div>
                <details className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer font-semibold text-slate-800">View exact target ZIP list</summary>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {zipCodes.map((zip) => (
                      <span key={zip} className="bg-white text-slate-700 px-3 py-1 rounded-full text-sm border border-slate-200">{zip}</span>
                    ))}
                  </div>
                </details>
              </div>
            </div>
            <div>
              <LeadForm />
              <div className="mt-8">
                <ServiceAreaPanel />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default LocationsPage
