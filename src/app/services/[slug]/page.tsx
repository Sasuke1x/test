import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { FiAlertTriangle, FiCheckCircle, FiPhone } from 'react-icons/fi'
import CTASection from '@/components/CTASection'
import LeadForm from '@/components/LeadForm'
import { interactiveGalleryImages, serviceLegacyContent, type ServiceSlug } from '@/data/enhancements'
import { processSteps, serviceCategories, serviceDetails, serviceFaqs, serviceSeoProfiles, siteInfo } from '@/data/siteData'

interface PageProps {
  params: { slug: string }
}

export const generateStaticParams = () =>
  serviceCategories.map((service) => ({ slug: service.slug }))

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const service = serviceCategories.find((item) => item.slug === params.slug)
  if (!service) {
    return { title: 'Service Not Found' }
  }
  const seoProfile = serviceSeoProfiles[service.slug]
  const title = seoProfile?.title ?? `${service.title} in Glen Burnie, MD`
  const description = seoProfile?.description ?? service.description
  const keywords = seoProfile?.keywords ? [...seoProfile.keywords] : [service.title, 'Glen Burnie MD']

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}`,
      type: 'article',
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [service.image],
    },
  }
}

const ServiceDetailPage = ({ params }: PageProps) => {
  const service = serviceCategories.find((item) => item.slug === params.slug)
  const detail = service ? serviceDetails[service.slug as keyof typeof serviceDetails] : null

  if (!service || !detail) {
    notFound()
  }

  const serviceSlug = service.slug as ServiceSlug
  const legacy = serviceLegacyContent[serviceSlug]
  const heroImage = interactiveGalleryImages.find((image) => image.serviceSlugs.includes(serviceSlug))?.src ?? service.image
  const gallery = interactiveGalleryImages.filter((image) => image.serviceSlugs.includes(serviceSlug)).slice(0, 6)
  const projectGallery = gallery.length > 0 ? gallery : interactiveGalleryImages.slice(0, 6)
  const seoProfile = serviceSeoProfiles[service.slug]
  const faqItems = serviceFaqs[service.slug] ?? []

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: seoProfile?.title ?? `${service.title} Services`,
    serviceType: service.title,
    areaServed: ['Glen Burnie, MD', 'Anne Arundel County, MD', 'Maryland'],
    provider: {
      '@type': 'LocalBusiness',
      name: siteInfo.name,
      telephone: siteInfo.phoneDigits,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7442 Baltimore Annapolis Blvd Suite 201',
        addressLocality: 'Glen Burnie',
        addressRegion: 'MD',
        postalCode: '21061',
        addressCountry: 'US',
      },
    },
    url: `https://housetransformersinc.com/services/${service.slug}`,
    description: seoProfile?.description ?? service.description,
  }

  const faqSchema = faqItems.length > 0
    ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }
    : null

  return (
    <>
      <Script
        id={`schema-service-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <Script
          id={`schema-faq-${service.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={service.title} fill className="object-cover opacity-55" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/65 to-slate-900/45" />
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 h-40 w-40 md:h-52 md:w-52 overflow-hidden opacity-15 pointer-events-none">
          <Image
            src="/brand/logo.png"
            alt=""
            width={484}
            height={171}
            className="h-full w-auto max-w-none -translate-x-10 invert brightness-200"
            aria-hidden
          />
        </div>
        <div className="container-custom relative z-10">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">Service</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">{seoProfile?.headline ?? service.title}</h1>
          <p className="text-lg text-slate-200 mt-4 max-w-2xl">{detail.hero}</p>
          {seoProfile?.intro && (
            <p className="text-base text-slate-200/90 mt-3 max-w-3xl">{seoProfile.intro}</p>
          )}
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={`tel:${siteInfo.phoneDigits}`} className="btn-primary">
              <FiPhone className="mr-2" /> Call for Same-Day Service
            </a>
            <Link href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-center bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div>
              <p className="text-sm font-semibold text-brand-700 uppercase tracking-wide">Fast Project Starts</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">Book your inspection and quote now</h2>
              <p className="text-slate-600 mt-2">
                Licensed crews, clear pricing, and financing options for qualified projects in Glen Burnie and Anne Arundel County.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <a href={`tel:${siteInfo.phoneDigits}`} className="btn-primary w-full sm:w-auto lg:w-full">
                <FiPhone className="mr-2" /> Call {siteInfo.phone}
              </a>
              <Link href="/contact" className="btn-outline w-full sm:w-auto lg:w-full text-center">
                Request Detailed Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {service.type === 'restoration' && (
        <section className="py-10 bg-emergency-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white border border-emergency-200 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="bg-emergency-100 text-emergency-600 p-3 rounded-full">
                  <FiAlertTriangle />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">24/7 Emergency Response</h2>
                  <p className="text-slate-600">We stabilize properties fast and document damage for insurance.</p>
                </div>
              </div>
              <a href={`tel:${siteInfo.phoneDigits}`} className="btn-primary">Call Now</a>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">What&apos;s Included</h2>
              <p className="text-slate-600 mt-3">Every project includes a detailed scope, clear communication, and quality materials.</p>
              <div className="mt-6 space-y-3">
                {detail.includes.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-600">
                    <FiCheckCircle className="text-brand-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900">Residential</h3>
              <p className="text-slate-600 mt-3">Tailored solutions that protect your home and keep projects on schedule.</p>
              <ul className="mt-4 space-y-2 text-slate-600">
                {detail.residential.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900">Commercial</h3>
              <p className="text-slate-600 mt-3">Scalable crews and reporting designed for business continuity.</p>
              <ul className="mt-4 space-y-2 text-slate-600">
                {detail.commercial.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Field Insight</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">{legacy.headline}</h2>
              <div className="mt-4 space-y-4 text-slate-600">
                {legacy.narrative.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">Legacy Scope Highlights</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                {legacy.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FiCheckCircle className="text-brand-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How we deliver results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <p className="text-sm font-semibold text-brand-600">Step {index + 1}</p>
                <h3 className="text-xl font-semibold text-slate-900 mt-2">{step.title}</h3>
                <p className="text-slate-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Recent Projects</h2>
            <Link href="/gallery/images" className="text-brand-700 font-semibold">View Gallery</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectGallery.map((image) => (
              <div key={image.src} className="group relative h-52 rounded-2xl overflow-hidden">
                <Image src={image.src} alt={image.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent px-4 py-3">
                  <p className="text-white text-sm font-medium">{image.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {faqItems.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-3xl mb-8">
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Service FAQs</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Questions about {service.title}</h2>
            </div>
            <div className="max-w-4xl space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.question} className="bg-white border border-slate-200 rounded-xl px-6 py-5 shadow-sm group">
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900 marker:text-brand-600">
                    {faq.question}
                  </summary>
                  <p className="text-slate-600 mt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}

export default ServiceDetailPage
