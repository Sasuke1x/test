import { Metadata } from 'next'
import { FiCheckCircle } from 'react-icons/fi'
import CTASection from '@/components/CTASection'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Insurance Claims Support',
  description: 'Insurance claim guidance for roofing, storm, water, and fire damage restoration projects.',
}

const steps = [
  'Call us for an emergency inspection and damage documentation.',
  'We provide photos, reports, and scope details for your adjuster.',
  'Our team coordinates repairs and restoration with clear timelines.',
  'We help you close out the claim with final documentation.',
]

const checklist = [
  'Policy information and claim number (if available)',
  'Photos or videos of the damage',
  'Notes about when the damage occurred',
  'Temporary protection work completed',
]

const InsuranceClaimsPage = () => {
  return (
    <>
      <section className="bg-slate-900 text-white py-16">
        <div className="container-custom">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">Insurance Claims</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">We guide you through the claims process</h1>
          <p className="text-lg text-slate-200 mt-4 max-w-2xl">
            From emergency response to final repairs, we provide documentation and communication that keeps your claim moving.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">How we support your claim</h2>
              <div className="mt-6 space-y-3 text-slate-600">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-start gap-3">
                    <FiCheckCircle className="text-brand-600 mt-1" />
                    <span>{index + 1}. {step}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-slate-900">Documentation checklist</h3>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {checklist.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
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

export default InsuranceClaimsPage
