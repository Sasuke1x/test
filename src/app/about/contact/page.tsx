import { Metadata } from 'next'
import ContactPageContent from '@/components/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Connect with House Transformers Inc. for inspections, emergency service, and project planning.',
}

const AboutContactPage = () => {
  return (
    <ContactPageContent
      title="Contact House Transformers Inc."
      subtitle="Reach our team for project planning, financing details, or emergency response support."
    />
  )
}

export default AboutContactPage
