import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { siteInfo } from '@/data/siteData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/brand/logo-footer.png"
              alt="House Transformers Inc."
              width={180}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-slate-400 mb-6">
              Roofing, remodeling, and restoration specialists delivering trusted service across Maryland and the DMV.
            </p>
            <div className="flex items-center gap-3">
              <a href={siteInfo.social.facebook} aria-label="Facebook" className="text-slate-400 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href={siteInfo.social.instagram} aria-label="Instagram" className="text-slate-400 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href={siteInfo.social.linkedin} aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
              <a href={siteInfo.social.youtube} aria-label="YouTube" className="text-slate-400 hover:text-white transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Service Coverage</h4>
            <p className="text-slate-400">Glen Burnie, MD and surrounding Maryland / DMV communities.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-slate-300">Anne Arundel</span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-slate-300">Prince George&apos;s</span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-slate-300">Charles County</span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-slate-300">25+ ZIP areas</span>
            </div>
            <Link href="/locations" className="inline-block mt-4 text-brand-300 font-semibold hover:text-white transition-colors">
              Explore interactive service map
            </Link>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <FiPhone className="text-brand-300 mt-1" />
                <a href={`tel:${siteInfo.phoneDigits}`} className="hover:text-white transition-colors">{siteInfo.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="text-brand-300 mt-1" />
                <a href={`mailto:${siteInfo.email}`} className="hover:text-white transition-colors">{siteInfo.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-brand-300 mt-1" />
                <span>{siteInfo.address}</span>
              </li>
            </ul>
            <p className="text-slate-500 text-sm mt-4">Hours: {siteInfo.hours}</p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {currentYear} {siteInfo.name}. All rights reserved.</p>
          <a href="https://www.cibirix.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            Website by Cibirix
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
