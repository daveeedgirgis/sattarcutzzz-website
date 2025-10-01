import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 relative">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">SattarCutZZZ</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
            <a href="#reviews" className="hover:text-gray-300 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a 
              href="https://sattarcutzzz.setmore.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors"
            >
              Book Now
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">✂️</div>
          <div className="absolute top-32 right-20 text-4xl">💈</div>
          <div className="absolute bottom-20 left-32 text-5xl">🪒</div>
          <div className="absolute bottom-32 right-10 text-3xl">✂️</div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Expert Cuts in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Burlington
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Top-notch grooming meets expert service. Solo barber and taper specialist offering a personal, luxurious experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://sattarcutzzz.setmore.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Book Appointment
            </a>
            <a 
              href="tel:(289) 938-6660"
              className="border border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Call (289) 938-6660
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Services & Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-gray-800 rounded-lg p-6 text-center hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">Haircut</h3>
              <div className="text-3xl font-bold mb-4">$25</div>
              <p className="text-gray-400">Consultation included where the perfect haircut will be catered for the client</p>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6 text-center hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">Haircut + Beard</h3>
              <div className="text-3xl font-bold mb-4">$30</div>
              <p className="text-gray-400">Elegantly planned out Haircut matched with a beard cut of clients choosing</p>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6 text-center hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">Line Ups</h3>
              <div className="text-3xl font-bold mb-4">$15</div>
              <p className="text-gray-400">Strictly for all lineups done with either a trimmer or a razor</p>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6 text-center hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">After Hours</h3>
              <div className="text-3xl font-bold mb-4">$40</div>
              <p className="text-gray-400">Available 10pm to 2am, by arrangement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ImageGallery />

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">What Clients Say</h2>
          <ReviewsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-xl">📍</div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-400">Burlington, Ontario</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xl">📞</div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:(289) 938-6660" className="text-gray-400 hover:text-white transition-colors">
                      (289) 938-6660
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xl">📧</div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:abdulsattar4red@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                      abdulsattar4red@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xl">📱</div>
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <a 
                      href="https://www.instagram.com/sattarcutzzz" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      @sattarcutzzz
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-gray-400">3 PM - 10 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-gray-400">11 AM - 11:59 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-400">11 AM - 11:59 PM</span>
                </div>
                <div className="mt-6 p-4 bg-black border border-gray-800 rounded-lg">
                  <div className="font-semibold mb-2">After Hours Available</div>
                  <div className="text-gray-400 text-sm">10 PM - 2 AM by arrangement ($40)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://sattarcutzzz.setmore.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-200 transition-colors inline-block"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">SattarCutZZZ</div>
          <p className="text-gray-400 mb-4">Expert cuts in Burlington, Ontario</p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/sattarcutzzz" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://sattarcutzzz.setmore.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Book Online
            </a>
            <a 
              href="tel:(289) 938-6660"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Call
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}