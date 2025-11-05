import Link from 'next/link'
import type { Metadata } from 'next'
import HeroCarousel from './components/HeroCarousel'

export const metadata: Metadata = {
  title: 'Tru Way Community Center | Buffalo NY | After-School & Summer Programs',
  description: 'Tru Way Community Center serves youth and families in Western New York with after-school programs, summer camps, and community support services. Located in Buffalo, NY since 2000.',
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section with Carousel */}
      <section className="relative flex-1 flex flex-col items-center justify-center px-6 py-32 min-h-[85vh]">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          <HeroCarousel />
        </div>

        {/* Logo in Corner */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20">
          <img 
            src="/logo.jpg" 
            alt="Tru Way Community Center Logo" 
            className="h-8 md:h-10 lg:h-12 w-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="relative inline-block">
              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight relative z-10">
                Tru Way Community Center
              </h1>
              {/* Glow effect behind text */}
              <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-primary-400 via-white to-accent-400 -z-10"></div>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary-400 via-white to-accent-400 mx-auto mb-16 rounded-full shadow-lg"></div>
          </div>

          {/* Contact Button */}
          <Link 
            href="/contact"
            className="inline-block px-12 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-lg font-normal rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-20"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
              About Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* History Card */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 shadow-sm border border-primary-100">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center">Our Story</h3>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed text-center">
                Founded in 2000 under the leadership of Dr. Virginia Williams, Tru Way has 
                served youth and families across Western New York for over two decades. We 
                provide safe, supportive after-school and summer programs that inspire learning, 
                build confidence, and strengthen our community.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 shadow-sm border border-primary-100">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center">Our Mission</h3>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed text-center">
                We are dedicated to fostering a vibrant, inclusive community where individuals 
                come together to share experiences, support one another, and create positive change. 
                Through meaningful connections and collaborative action, we build a stronger, 
                more united neighborhood for all.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We bring neighbors together through regular events, workshops, and social gatherings. 
                Our community center serves as a welcoming space where people of all ages and backgrounds 
                can connect, share experiences, and build meaningful relationships that strengthen our neighborhood.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Support</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We provide resources, guidance, and assistance to help individuals and families thrive. 
                From educational programs and mentorship opportunities to access to essential services, 
                we're committed to ensuring every member of our community has the support they need to 
                succeed and reach their full potential.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Action</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We mobilize our community to address local challenges and create lasting positive change. 
                Through volunteer initiatives, advocacy efforts, and collaborative projects, we work together 
                to improve our neighborhood, protect our environment, and ensure a brighter future for 
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8">
            {/* Phone */}
            <a 
              href="tel:+17168920258" 
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors text-sm md:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(716) 892-0258</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:truway@roadrunner.com?subject=Contact%20from%20Website" 
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors text-sm md:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>truway@roadrunner.com</span>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/truwaycc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors text-sm md:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>

            {/* Address */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=2056+Genesee+Street+Buffalo+NY+14211"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors text-sm md:text-base"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>2056 Genesee Street, Buffalo, NY 14211</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Tru Way Community Center. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
