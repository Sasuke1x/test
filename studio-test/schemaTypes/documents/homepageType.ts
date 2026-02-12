import { defineField, defineType } from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Internal Title', type: 'string', initialValue: 'Homepage Content' }),
    defineField({ name: 'heroHeadline', title: 'Hero Headline', type: 'string' }),
    defineField({ name: 'heroSubheadline', title: 'Hero Subheadline', type: 'text', rows: 3 }),
    defineField({ name: 'localIntroHeading', title: 'Local Intro Heading', type: 'string' }),
    defineField({ name: 'localIntroBody', title: 'Local Intro Body', type: 'text', rows: 3 }),
    defineField({ name: 'trustedHeading', title: 'Trusted Section Heading', type: 'string' }),
    defineField({ name: 'remodelingHeading', title: 'Remodeling Section Heading', type: 'string' }),
    defineField({ name: 'remodelingBody', title: 'Remodeling Section Body', type: 'text', rows: 2 }),
    defineField({ name: 'emergencyHeading', title: 'Emergency Section Heading', type: 'string' }),
    defineField({ name: 'emergencyBody', title: 'Emergency Section Body', type: 'text', rows: 2 }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heroHeadline',
    },
    prepare({ title, subtitle }) {
      return { title: title || 'Homepage', subtitle }
    },
  },
})
