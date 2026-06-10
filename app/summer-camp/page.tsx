import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Summer Camp & Program Applications | Tru-Way Community Center Inc.',
  description:
    'View and download Tru-Way Community Center summer camp and after-school program application forms for Buffalo, NY families.',
}

const forms = [
  {
    title: 'Afterschool Application',
    description: 'Application form for the 2026–2027 after-school program.',
    file: '/forms/afterschool-application-2026-2027.pdf',
    downloadName: 'TruWay-Afterschool-Application-2026-2027.pdf',
  },
  {
    title: 'Primetime Summer Camp Application',
    description: 'Application form for the Primetime Summer Camp program.',
    file: '/forms/primetime-summer-camp-application-2025.pdf',
    downloadName: 'TruWay-Primetime-Summer-Camp-Application-2025.pdf',
  },
]

export default function SummerCampPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="flex-1 px-6 py-20 max-w-4xl mx-auto w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 text-primary-700 hover:text-primary-900 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Summer Camp & Program Forms
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4"></div>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            View or download our application forms below. When you&apos;re done, email your completed
            form to{' '}
            <a
              href="mailto:truway2016@gmail.com?subject=Tru-Way%20Program%20Application"
              className="text-primary-700 hover:text-primary-900 font-medium underline underline-offset-2"
            >
              truway2016@gmail.com
            </a>
            , or return it in person at the community center.
          </p>
        </div>

        <div className="mb-10 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-medium text-gray-900 mb-2">Submit Your Completed Form</h2>
          <p className="text-gray-700 font-light mb-4">
            Email your filled-out application as a PDF or photo attachment.
          </p>
          <a
            href="mailto:truway2016@gmail.com?subject=Tru-Way%20Program%20Application"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send to truway2016@gmail.com
          </a>
        </div>

        <div className="space-y-8">
          {forms.map((form) => (
            <div
              key={form.file}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-light text-gray-900">{form.title}</h2>
                    </div>
                    <p className="text-gray-600 font-light">{form.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                    <a
                      href={form.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View Form
                    </a>
                    <a
                      href={form.file}
                      download={form.downloadName}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <iframe
                    src={`${form.file}#view=FitH`}
                    title={form.title}
                    className="w-full h-[500px] md:h-[600px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-light mb-4">
            Questions about enrollment? We&apos;re happy to help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-lg font-medium rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8">
            <a
              href="tel:+17168920258"
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors text-sm md:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Byron Trice — Office: (716) 892-0258</span>
            </a>

            <a
              href="tel:+17165639863"
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors text-sm md:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Cell: (716) 563-9863</span>
            </a>

            <a
              href="mailto:truway2016@gmail.com?subject=Tru-Way%20Program%20Application"
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors text-sm md:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>truway2016@gmail.com</span>
            </a>

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

          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Tru-Way Community Center Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
