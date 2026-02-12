'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiChevronDown, FiClock, FiMenu, FiPhone, FiShield, FiX } from 'react-icons/fi'

type HeaderProps = {
  siteInfo: {
    phone: string
    phoneDigits: string
  }
}

const Header = ({ siteInfo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      href: '/about',
      label: 'About Us',
      children: [
        { href: '/about', label: 'About House Transformers' },
        { href: '/about/financing', label: 'Financing' },
        { href: '/about/insurance-claims', label: 'Insurance Claims' },
        { href: '/about/faqs', label: 'FAQs' },
        { href: '/contact', label: 'Contact Us' },
      ],
    },
    {
      href: '/services',
      label: 'Services',
      children: [
        { href: '/services', label: 'All Services' },
        { href: '/services/roofing', label: 'Roofing' },
        { href: '/services/windows', label: 'Windows' },
        { href: '/services/siding-gutters', label: 'Siding & Gutters' },
        { href: '/services/kitchen-bath', label: 'Kitchen & Bath' },
        { href: '/services/home-additions', label: 'Home Additions' },
        { href: '/services/decks-patios', label: 'Decks & Patios' },
        { href: '/services/emergency-services', label: 'Emergency Services' },
        { href: '/services/water-damage', label: 'Water & Flood Damage' },
        { href: '/services/fire-smoke-damage', label: 'Fire & Smoke Damage' },
        { href: '/services/storm-damage', label: 'Storm Damage' },
      ],
    },
    { href: '/locations', label: 'Locations' },
    {
      href: '/gallery',
      label: 'Gallery',
      children: [
        { href: '/gallery', label: 'Gallery Overview' },
        { href: '/gallery/images', label: 'Image Gallery' },
        { href: '/gallery/videos', label: 'Video Gallery' },
      ],
    },
    { href: '/blog', label: 'Blog' },
  ]

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenSection(null)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="hidden md:block border-b border-slate-100 bg-slate-50">
        <div className="container-custom py-2 text-xs text-slate-600 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1"><FiShield className="text-brand-700" /> Licensed & insured crews</span>
            <span className="inline-flex items-center gap-1"><FiClock className="text-brand-700" /> 24/7 emergency response</span>
          </div>
          <a href={`tel:${siteInfo.phoneDigits}`} className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800 transition-colors">
            <FiPhone /> {siteInfo.phone}
          </a>
        </div>
      </div>

      <div className="container-custom">
        <div className="flex items-center justify-between py-3 lg:py-4 gap-4">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm">
              <Image
                src="/brand/logo.png"
                alt="House Transformers Inc. logo"
                width={230}
                height={72}
                className="h-12 md:h-14 w-auto brightness-0 contrast-125"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-slate-700 font-semibold hover:text-brand-700 transition-colors"
                >
                  {link.label}
                  {link.children && <FiChevronDown className="text-sm" />}
                </Link>
                {link.children && (
                  <div className="absolute left-0 top-full w-72 pt-2 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all">
                    <div className="rounded-xl bg-white shadow-xl border border-slate-100 p-3 grid gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteInfo.phoneDigits}`}
              className="inline-flex items-center gap-2 text-brand-700 font-semibold px-3 py-2 rounded-lg hover:bg-brand-50 transition-colors"
            >
              <FiPhone />
              {siteInfo.phone}
            </a>
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${siteInfo.phoneDigits}`}
              className="inline-flex items-center justify-center p-2 rounded-md border border-brand-200 text-brand-700"
              aria-label="Call House Transformers"
            >
              <FiPhone className="text-xl" />
            </a>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md border border-slate-200 text-slate-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-5">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <div key={link.href} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setOpenSection(openSection === link.href ? null : link.href)}
                      className="w-full flex items-center justify-between text-left text-slate-800 font-semibold"
                    >
                      <span>{link.label}</span>
                      {link.children && <FiChevronDown className={`transition-transform ${openSection === link.href ? 'rotate-180' : ''}`} />}
                    </button>
                    {!link.children && (
                      <Link href={link.href} onClick={closeMenu} className="block mt-2 text-sm text-slate-700 hover:text-brand-700">
                        Go to {link.label}
                      </Link>
                    )}
                    {link.children && openSection === link.href && (
                      <div className="mt-2 flex flex-col gap-1 bg-slate-50 rounded-lg p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className="text-sm font-medium text-slate-700 px-2 py-1.5 rounded hover:bg-white hover:text-brand-700 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <a href={`tel:${siteInfo.phoneDigits}`} className="btn-outline" onClick={closeMenu}>
                  Call {siteInfo.phone}
                </a>
                <Link href="/contact" className="btn-primary" onClick={closeMenu}>
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
