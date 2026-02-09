import { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { blogPosts } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights and tips on roofing, remodeling, and restoration from House Transformers Inc.',
}

const BlogPage = () => {
  return (
    <>
      <section className="bg-slate-900 text-white py-16">
        <div className="container-custom">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Insights for homeowners and property managers</h1>
          <p className="text-lg text-slate-200 mt-4 max-w-2xl">
            Practical advice for roofing, remodeling, restoration, and emergency preparedness.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <p className="text-sm font-semibold text-brand-600">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              <h2 className="text-2xl font-bold text-slate-900 mt-3">{post.title}</h2>
              <p className="text-slate-600 mt-3">{post.excerpt}</p>
              <span className="text-brand-700 font-semibold inline-flex items-center gap-2 mt-4">Read more</span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default BlogPage
