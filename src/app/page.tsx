import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiAlertTriangle, FiArrowRight, FiBriefcase, FiCheckCircle, FiClock, FiHome, FiPhone, FiShield } from 'react-icons/fi'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import LeadForm from '@/components/LeadForm'
import ServiceAreaPanel from '@/components/ServiceAreaPanel'
import TestimonialsSection from '@/components/TestimonialsSection'
import TrustBadges from '@/components/TrustBadges'
import { interactiveGalleryImages } from '@/data/enhancements'
import { serviceCategories, siteInfo } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Roofing, Remodeling & Restoration in Glen Burnie, MD',
  description: 'House Transformers Inc. delivers roofing, remodeling, and emergency restoration for residential and commercial clients throughout Glen Burnie and surrounding Maryland communities.',
}

const HomePage = () => {
  const remodelingServices = serviceCategories.filter((service) => service.type === 'remodeling')
  const restorationServices = serviceCategories.filter((service) => service.type === 'restoration')
  const galleryTeaser = interactiveGalleryImages.slice(0, 3)

  const stats = [
    { label: 'Years Serving MD', value: '15+' },
    { label: 'Emergency Response', value: '24/7' },
    { label: 'Coverage Zones', value: '3 Regions' },
  ]

  return (
    <>
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/services/roof-repairs.jpg"
            alt="Roofing and restoration services"
            fill
            className="object-cover opacity-45"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/45" />
        <div className="absolute left-[8%] top-1/2 -translate-y-1/2 h-44 w-44 md:h-56 md:w-56 overflow-hidden opacity-15 pointer-events-none">
          <Image
            src="/brand/logo.png"
            alt=""
            width={484}
            height={171}
            className="h-full w-auto max-w-none -translate-x-8 invert brightness-200"
            aria-hidden
          />
        </div>
        <div className="container-custom relative z-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">Glen Burnie, MD</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
                Roofing, Remodeling & Restoration You Can Trust
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mt-4">
                House Transformers Inc. delivers responsive emergency service, high-quality craftsmanship, and insurance-ready documentation for residential and commercial projects.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a href={`tel:${siteInfo.phoneDigits}`} className="btn-primary">
                  <FiPhone className="mr-2" /> Call {siteInfo.phone}
                </a>
                <Link href="/services/emergency-services" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                  24/7 Emergency Help
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/10 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/15 transition-colors duration-300">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <LeadForm variant="dark" />
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Trusted & Certified</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Award-winning craftsmanship backed by industry leaders</h2>
          </div>
          <TrustBadges />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Remodeling Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Transform your home or facility with confidence</h2>
              <p className="text-slate-600 mt-3 max-w-2xl">From roofing to full remodels, our crews handle every detail with careful planning and premium materials.</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-brand-700 font-semibold">
              View all services <FiArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remodelingServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-44">
                  <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-emergency-600 uppercase tracking-wide">Emergency Restoration</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Water, fire, and storm damage response</h2>
              <p className="text-slate-600 mt-3">Our restoration teams respond quickly, secure your property, and guide you through insurance documentation. We restore residential and commercial spaces with precision.</p>

              <div className="mt-6 space-y-4">
                {restorationServices.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="flex items-center justify-between gap-4 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 hover:border-emergency-300 hover:-translate-y-0.5 transition-all duration-300">
                    <div>
                      <p className="font-semibold text-slate-900">{service.title}</p>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                    <FiArrowRight className="text-emergency-500" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-emergency-50 border border-emergency-200 rounded-2xl p-8">
              <div className="flex items-center gap-3">
                <div className="bg-emergency-100 text-emergency-600 p-3 rounded-full">
                  <FiAlertTriangle />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emergency-600 uppercase">24/7 Response</p>
                  <h3 className="text-2xl font-bold text-slate-900">Need emergency help now?</h3>
                </div>
              </div>
              <p className="text-slate-600 mt-4">
                Our crews handle tarping, board-up, extraction, and stabilization to prevent further loss.
              </p>
              <a href={`tel:${siteInfo.phoneDigits}`} className="btn-primary mt-6 w-full">
                Call {siteInfo.phone}
              </a>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-emergency-600" /> Tree removal coordination
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-emergency-600" /> Roof tarping & board-up
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-emergency-600" /> Insurance-ready documentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-3">
                <div className="bg-brand-50 text-brand-700 p-3 rounded-full">
                  <FiHome />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Residential Services</h3>
              </div>
              <p className="text-slate-600 mt-4">
                Protect your home with roofing, siding, windows, and remodels designed to boost comfort, efficiency, and value.
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Roof replacement and repair</li>
                <li>• Kitchen, bath, and additions</li>
                <li>• Emergency restoration support</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-3">
                <div className="bg-brand-50 text-brand-700 p-3 rounded-full">
                  <FiBriefcase />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Commercial Services</h3>
              </div>
              <p className="text-slate-600 mt-4">
                Commercial roofing, tenant upgrades, and restoration for offices, retail, and multi-family properties.
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Flat roof systems and maintenance</li>
                <li>• Large-loss restoration projects</li>
                <li>• Flexible scheduling to reduce downtime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Financing & Insurance</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Flexible financing and insurance claim support</h2>
              <p className="text-slate-600 mt-3">
                We help clients navigate financing options and work directly with insurance to keep projects moving quickly.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/about/financing" className="btn-secondary">Financing Options</Link>
                <Link href="/about/insurance-claims" className="btn-outline">Insurance Claims Help</Link>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <FiShield className="text-brand-600" />
                  <span className="text-slate-600">Licensed & insured crews</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiClock className="text-brand-600" />
                  <span className="text-slate-600">Clear timelines and updates</span>
                </div>
              </div>
            </div>
            <ServiceAreaPanel />
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Gallery</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Recent projects across Maryland</h2>
            </div>
            <Link href="/gallery/images" className="inline-flex items-center gap-2 text-brand-700 font-semibold">
              View full gallery <FiArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryTeaser.map((image) => (
              <div key={image.src} className="group relative h-64 rounded-2xl overflow-hidden shadow-sm">
                <Image src={image.src} alt={image.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 to-transparent px-4 py-3">
                  <p className="text-white text-sm font-medium">{image.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

export default HomePage
