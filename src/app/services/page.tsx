import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import CTASection from '@/components/CTASection'
import LeadForm from '@/components/LeadForm'
import { processSteps, serviceCategories } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore roofing, remodeling, and restoration services for residential and commercial clients across Glen Burnie and Maryland.',
}

const ServicesPage = () => {
  const remodeling = serviceCategories.filter((service) => service.type === 'remodeling')
  const restoration = serviceCategories.filter((service) => service.type === 'restoration')

  return (
    <>
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/legacy/annapolisroof-4.jpg" alt="House Transformers services" fill className="object-cover opacity-55" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/65 to-slate-900/45" />
        <div className="container-custom relative z-10">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Full-service remodeling and restoration</h1>
          <p className="text-lg text-slate-200 mt-4 max-w-2xl">
            We handle everything from roofing and windows to emergency restoration for water, fire, and storm damage.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Residential & Commercial Capabilities</h2>
              <p className="text-slate-600 mt-3">
                Whether you manage a commercial facility or want to upgrade your home, our teams deliver responsive service, premium materials, and transparent communication.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                <div className="border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-900">Residential</h3>
                  <p className="text-slate-600 mt-2">Roofing, remodeling, and restoration designed for long-term protection and comfort.</p>
                </div>
                <div className="border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-900">Commercial</h3>
                  <p className="text-slate-600 mt-2">Large-loss restoration, tenant build-outs, and preventive maintenance with minimal disruption.</p>
                </div>
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Remodeling Services</h2>
            <Link href="/contact" className="text-brand-700 font-semibold inline-flex items-center gap-2">
              Request a Quote <FiArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remodeling.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative h-44">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 mt-2">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Emergency Restoration</h2>
            <Link href="/services/emergency-services" className="text-emergency-600 font-semibold inline-flex items-center gap-2">
              24/7 Emergency Help <FiArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restoration.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-emergency-300 transition">
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mt-2">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Clear steps, transparent timelines</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="bg-white border border-slate-200 rounded-2xl p-6">
                <p className="text-sm font-semibold text-brand-600">Step {index + 1}</p>
                <h3 className="text-xl font-semibold text-slate-900 mt-2">{step.title}</h3>
                <p className="text-slate-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default ServicesPage
