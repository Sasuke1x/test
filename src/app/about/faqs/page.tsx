import { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Get answers to common questions about roofing, remodeling, restoration, and emergency services.',
}

const FaqsPage = () => {
  return (
    <>
      <section className="bg-slate-900 text-white py-16">
        <div className="container-custom">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">FAQs</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Questions? We have answers.</h1>
          <p className="text-lg text-slate-200 mt-4 max-w-2xl">
            Explore common questions about our services, response times, and project process.
          </p>
        </div>
      </section>
      <FAQSection />
      <CTASection />
    </>
  )
}

export default FaqsPage
