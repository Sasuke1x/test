import { Metadata } from 'next'
import ContactPageContent from '@/components/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Request a quote, schedule an inspection, or reach House Transformers Inc. for emergency restoration.',
}

const ContactPage = () => {
  return (
    <ContactPageContent
      title="Let’s plan your next project"
      subtitle="Request a free inspection, discuss financing, or call for emergency services. We respond quickly across Glen Burnie and Maryland."
    />
  )
}

export default ContactPage
