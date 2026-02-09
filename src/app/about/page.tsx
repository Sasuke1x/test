import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiAward, FiShield, FiTool, FiUsers } from 'react-icons/fi'
import CTASection from '@/components/CTASection'
import TrustBadges from '@/components/TrustBadges'
import { siteInfo } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about House Transformers Inc., a trusted roofing, remodeling, and restoration company serving Glen Burnie and Maryland communities.',
}

const values = [
  {
    title: 'Craftsmanship',
    description: 'We deliver precise workmanship using premium materials and proven installation methods.',
    icon: <FiTool className="text-brand-600 text-3xl" />,
  },
  {
    title: 'Reliability',
    description: 'Responsive crews, clear timelines, and proactive communication on every project.',
    icon: <FiShield className="text-brand-600 text-3xl" />,
  },
  {
    title: 'Client Care',
    description: 'We prioritize long-term relationships and treat every property like it is our own.',
    icon: <FiUsers className="text-brand-600 text-3xl" />,
  },
  {
    title: 'Award-Winning',
    description: 'Recognized for quality service across roofing, restoration, and remodeling.',
    icon: <FiAward className="text-brand-600 text-3xl" />,
  },
]

const AboutPage = () => {
  return (
    <>
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/legacy/2025-glenburnie-md-rnovation-4.jpg" alt="House Transformers team" fill className="object-cover opacity-55" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/65 to-slate-900/45" />
        <div className="container-custom relative z-10">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Dedicated to protecting Maryland homes and businesses</h1>
          <p className="text-lg text-slate-200 mt-4 max-w-2xl">
            {siteInfo.name} combines remodeling expertise with 24/7 restoration support to deliver peace of mind for every client.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Story</h2>
              <p className="text-slate-600 mt-4">
                House Transformers Inc. is a Glen Burnie-based contractor specializing in roofing, remodeling, and restoration. We help homeowners and business owners recover from storm damage, modernize their properties, and protect what matters most.
              </p>
              <p className="text-slate-600 mt-4">
                Every project is guided by experienced project managers, detailed documentation, and a commitment to doing the job right the first time.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/about/financing" className="btn-secondary">Financing Options</Link>
                <Link href="/about/insurance-claims" className="btn-outline">Insurance Claims</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image src="/services/roof-repairs.jpg" alt="Roofing project" fill className="object-cover" />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image src="/services/window.jpg" alt="Window installation" fill className="object-cover" />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image src="/services/siding.jpg" alt="Siding upgrade" fill className="object-cover" />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image src="/services/roofing-repair.jpg" alt="Emergency restoration" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Core Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built on trust, safety, and quality</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white border border-slate-200 rounded-2xl p-6">
                <div>{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mt-4">{value.title}</h3>
                <p className="text-slate-600 mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Certifications</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Recognized across the industry</h2>
          </div>
          <TrustBadges />
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default AboutPage
