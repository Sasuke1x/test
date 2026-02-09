import Link from 'next/link'
import { FiPhone } from 'react-icons/fi'
import { siteInfo } from '@/data/siteData'

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Need help fast? Our emergency team is ready 24/7.
            </h2>
            <p className="text-slate-200 text-lg">
              From roofing and remodels to water, fire, and storm restoration — we bring the crew, equipment, and expertise to protect your property.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <a href={`tel:${siteInfo.phoneDigits}`} className="btn-primary">
              <FiPhone className="mr-2" /> Call {siteInfo.phone}
            </a>
            <Link href="/contact" className="btn-secondary bg-white">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
