'use client'

import { useState, useEffect } from 'react'

const images = [
  '/heroimage.jpg',
  '/image000000.JPG',
  '/image000000_2.JPG',
  '/IMG_4592.JPG',
  '/IMG_1836.JPEG',
  '/IMG_1841.JPEG',
  '/19287168-B5E7-4B3D-9385-F16C585311B5.jpg',
  '/39E21FC0-6DE8-4A41-BB8B-1DE4953A2A53.jpg',
  '/46FC4570-A257-4780-A28D-E09B49277CAB.jpg',
  '/787C419F-1428-4998-965E-680F1CA100BE.jpg',
  '/DBC78BD4-312F-45C1-8DE0-84BBED149010.jpg',
  '/FCEF7986-8376-4CA3-A4BC-F7AC8F9FC0F9.jpg',
  '/FullSizeRender 2.jpg',
  '/FullSizeRender.jpg',
  '/IMG_4289.jpg',
  '/IMG_4342 2.jpg',
  '/IMG_4342.jpg',
  '/IMG_4513.jpg',
  '/IMG_4824.jpg',
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 8000) // Change image every 8 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative w-full h-full">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/90 hover:text-white transition-all backdrop-blur-sm"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/90 hover:text-white transition-all backdrop-blur-sm"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
