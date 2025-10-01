import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import MovingReviewsCarousel from "@/components/MovingReviewsCarousel";
import MovingCutsCarousel from "@/components/MovingCutsCarousel";

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
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Moving gradient orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/15 to-teal-500/15 rounded-full blur-lg animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
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
      <section id="services" className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services & Pricing</h2>
            <p className="text-gray-300 max-w-xl mx-auto">Professional cuts at affordable prices. Every service includes consultation.</p>
          </div>
          
          {/* Pricing Table */}
          <div className="bg-black border border-gray-800 rounded-2xl overflow-hidden max-w-2xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <th className="text-left py-4 px-6 font-semibold text-white">Service</th>
                    <th className="text-center py-4 px-6 font-semibold text-white">Price</th>
                    <th className="text-right py-4 px-6 font-semibold text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-white">Haircut</div>
                      <div className="text-sm text-gray-400">Consultation included, perfect cut catered for client</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-xl font-bold text-white">$25</div>
                    </td>
                    <td className="py-4 px-6 text-right text-gray-400">45 min</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-white">Haircut + Beard</div>
                      <div className="text-sm text-gray-400">Complete package with beard styling of your choice</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-xl font-bold text-white">$30</div>
                      <div className="text-xs text-green-400">Best Value</div>
                    </td>
                    <td className="py-4 px-6 text-right text-gray-400">60 min</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-white">Line Ups</div>
                      <div className="text-sm text-gray-400">Precision line ups with trimmer or razor</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-xl font-bold text-white">$15</div>
                    </td>
                    <td className="py-4 px-6 text-right text-gray-400">20 min</td>
                  </tr>
                  <tr className="hover:bg-gray-900 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-white">After Hours</div>
                      <div className="text-sm text-gray-400">Available 10pm-2am by arrangement</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="text-xl font-bold text-white">$40</div>
                    </td>
                    <td className="py-4 px-6 text-right text-gray-400">45 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://sattarcutzzz.setmore.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Moving Cuts Carousel */}
      <MovingCutsCarousel />

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">What Clients Say</h2>
          <MovingReviewsCarousel />
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