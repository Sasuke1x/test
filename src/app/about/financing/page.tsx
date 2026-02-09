import { Metadata } from 'next'
import { FiCheckCircle } from 'react-icons/fi'
import CTASection from '@/components/CTASection'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Financing Options',
  description: 'Explore financing options for roofing, remodeling, and restoration projects in Glen Burnie, MD.',
}

const benefits = [
  'Fast approvals for qualified homeowners',
  'Flexible monthly payments to fit your budget',
  'Finance roofing, remodels, and restoration projects',
  'Dedicated support from start to finish',
]

const FinancingPage = () => {
  return (
    <>
      <section className="bg-slate-900 text-white py-16">
        <div className="container-custom">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">Financing</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Flexible financing for your next project</h1>
          <p className="text-lg text-slate-200 mt-4 max-w-2xl">
            We offer financing solutions to help you start your roofing, remodeling, or restoration project sooner.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">What to expect</h2>
              <p className="text-slate-600 mt-3">We walk you through available programs and help you select the best fit.</p>
              <div className="mt-6 space-y-3 text-slate-600">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <FiCheckCircle className="text-brand-600" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-slate-900">How to get started</h3>
                <ol className="mt-3 space-y-2 text-slate-600">
                  <li>1. Request a free inspection and estimate.</li>
                  <li>2. Review financing options with our team.</li>
                  <li>3. Choose terms that match your budget.</li>
                  <li>4. Schedule your project and begin work.</li>
                </ol>
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default FinancingPage
