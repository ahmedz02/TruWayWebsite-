export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
      <div className="flex items-center gap-3 md:gap-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/truwaycc/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-white/90 hover:text-white transition-all duration-200 bg-black/20 hover:bg-black/30 rounded-full backdrop-blur-sm p-2"
          aria-label="Visit our Facebook page"
        >
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        {/* Phone */}
        <a
          href="tel:+17168920258"
          className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-white/90 hover:text-white transition-all duration-200 bg-black/20 hover:bg-black/30 rounded-full backdrop-blur-sm p-2"
          aria-label="Call us at (716) 892-0258"
        >
          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:truway@roadrunner.com"
          className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-white/90 hover:text-white transition-all duration-200 bg-black/20 hover:bg-black/30 rounded-full backdrop-blur-sm p-2"
          aria-label="Email us at truway@roadrunner.com"
        >
          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </nav>
  )
}
