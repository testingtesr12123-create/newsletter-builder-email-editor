"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: "/sdk#features", label: "Features" },
  { href: "/sdk#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "https://app.grapesjs.com/docs-sdk/overview/getting-started?utm_source=grapesjs&utm_medium=docsHeader", label: "Docs" },
];

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const MobileMenu = () => (
    <div
      className={`fixed inset-x-0 top-0 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ paddingTop: '72px' }}
    >
      <div className="absolute inset-0 h-screen bg-[#1A0B2E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ul className="flex flex-col items-center gap-y-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xl text-slate-200 hover:text-white" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="w-full max-w-xs pt-4">
                <a href="https://app.grapesjs.com/signin?utm_source=grapesjs&utm_medium=mainTopNav" className="block w-full text-center text-xl text-white transition-colors border-2 border-white/20 hover:border-white/40 rounded-full py-3">
                  Sign In
                </a>
              </li>
              <li className="w-full max-w-xs">
                <a href="https://forms.gle/VUycp3rc8iCpbh9k8" className="block w-full text-center text-xl font-medium text-white bg-gradient-to-r from-primary to-accent hover:brightness-110 rounded-full py-3.5 shadow-lg shadow-primary/30">
                  Contact Us
                </a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-[rgba(26,11,46,0.8)] to-[rgba(45,27,78,0.8)] backdrop-blur-lg border-b border-white/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-[72px] items-center justify-between">
            <Link href="/" aria-label="GrapesJS Homepage">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/99fdf5e5-58ff-49fd-ba51-116add7c229a-grapesjs-com/assets/svgs/grapesjs-logo-with-text-1.svg"
                alt="GrapesJS Logo"
                width={127}
                height={24}
                priority
                unoptimized
              />
            </Link>
            
            <nav className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <ul className="flex items-center gap-x-8">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-base text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-x-4">
              <div className="hidden lg:flex items-center gap-x-4">
                <a href="https://app.grapesjs.com/signin?utm_source=grapesjs&utm_medium=mainTopNav" className="text-base font-normal text-white whitespace-nowrap transition-colors border-2 border-white/20 hover:border-white/40 rounded-full px-4 py-[6px]">
                  Sign In
                </a>
                <a href="https://forms.gle/VUycp3rc8iCpbh9k8" className="text-base font-medium text-white whitespace-nowrap bg-gradient-to-r from-primary to-accent hover:brightness-110 transition-shadow rounded-full px-4 py-[9px] shadow-[0_2px_12px_rgba(184,87,216,0.3)]">
                  Contact Us
                </a>
              </div>
              <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="text-white p-2 -mr-2">
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu />
      {isMenuOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default NavigationHeader;