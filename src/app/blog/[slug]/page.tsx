import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CTASection from '@/components/CTASection'
import { blogPosts } from '@/data/siteData'

interface PageProps {
  params: { slug: string }
}

export const generateStaticParams = () => blogPosts.map((post) => ({ slug: post.slug }))

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const post = blogPosts.find((item) => item.slug === params.slug)
  if (!post) {
    return { title: 'Post Not Found' }
  }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

const BlogDetailPage = ({ params }: PageProps) => {
  const post = blogPosts.find((item) => item.slug === params.slug)
  if (!post) {
    notFound()
  }

  return (
    <>
      <section className="bg-slate-900 text-white py-16">
        <div className="container-custom">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">{post.title}</h1>
          <p className="text-slate-200 mt-3">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-lg text-slate-600 mb-6">{post.excerpt}</p>
          <div className="space-y-5 text-slate-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-700 font-semibold mt-8">
            ← Back to Blog
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default BlogDetailPage
