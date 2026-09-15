import Link from "next/link";

export default function FixIt() {
  return (
    <main className="min-h-screen relative">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/store_page_video.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-black/60 z-0" />

      {/* All content above video */}
      <div className="relative z-10">

        {/* Navbar */}
        <nav className="bg-black/50 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">KWAN-2</Link>
            <div className="hidden md:flex gap-8 text-gray-300">
              <Link href="#services" className="hover:text-white transition">Services</Link>
              <Link href="#how-it-works" className="hover:text-white transition">How It Works</Link>
              <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
              <Link href="#request" className="hover:text-white transition">Request Repair</Link>
            </div>
            <a href="tel:+12092719068" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold">
              Call Now
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                You Tell Us What's Wrong.<br />
                <span className="text-blue-400">We Find the Right Person to Fix It.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Reliable home repair and maintenance services for homeowners and property owners in Merced and surrounding communities.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#request" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
                  Request a Repair
                </Link>
                <a href="tel:+12092719068" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
                  Get a Quote
                </a>
              </div>
              <p className="mt-6 text-gray-400">📞 (209) 271-9068 — Available Mon–Sat</p>
              <p className="text-gray-400">✉️ kwan2station@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 text-center border border-white/20">
              <p className="text-6xl mb-4">🏠</p>
              <p className="text-2xl font-bold text-white">Serving Merced, CA</p>
              <p className="text-gray-300 mt-2">and surrounding communities</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 mb-16">Simple, fast, and hassle-free</p>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { step: "1", icon: "📋", title: "Tell Us What's Wrong", desc: "Submit your repair request online or give us a call. Describe the problem and upload photos if you have them." },
                { step: "2", icon: "🔍", title: "We Find the Right Professional", desc: "We match your project with an appropriate local service professional who has the right skills and licensing." },
                { step: "3", icon: "✅", title: "Get It Fixed", desc: "We coordinate the service, keep you informed, and make the whole process simple from start to finish." },
              ].map((item) => (
                <div key={item.step} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 text-center mb-16">We coordinate a wide range of home repair and maintenance services</p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: "🪚", name: "Drywall Repair" },
                { icon: "🎨", name: "Painting" },
                { icon: "🚪", name: "Door Repair & Installation" },
                { icon: "🚿", name: "Faucet Replacement" },
                { icon: "🚽", name: "Toilet Replacement" },
                { icon: "💡", name: "Light Fixture Installation" },
                { icon: "🌀", name: "Ceiling Fan Installation" },
                { icon: "📺", name: "TV Mounting" },
                { icon: "🪣", name: "Shelving Installation" },
                { icon: "🗄️", name: "Cabinet Repair" },
                { icon: "🏗️", name: "Flooring Repair" },
                { icon: "🌿", name: "Fence Repair" },
                { icon: "💧", name: "Pressure Washing" },
                { icon: "🍂", name: "Gutter Cleaning" },
                { icon: "🛋️", name: "Furniture Assembly" },
                { icon: "🔧", name: "General Maintenance" },
              ].map((service) => (
                <div key={service.name} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <p className="font-semibold text-white">{service.name}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8 text-sm">* Where California licensing is required, appropriately licensed professionals are used.</p>
          </div>
        </section>

        {/* Request Form */}
        <section id="request" className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4">Request a Repair</h2>
            <p className="text-xl text-gray-300 text-center mb-12">Fill out the form below and we'll be in touch shortly</p>
            <form className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6 border border-white/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                  <input type="text" className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number *</label>
                  <input type="tel" className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="(209) 555-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                <input type="email" className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="john@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Property Address *</label>
                <input type="text" className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="123 Main St, Merced, CA" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Property Type</label>
                  <select className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400">
                    <option className="text-black">Residential</option>
                    <option className="text-black">Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Service Needed</label>
                  <select className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400">
                    <option className="text-black">Select a service...</option>
                    <option className="text-black">Drywall Repair</option>
                    <option className="text-black">Painting</option>
                    <option className="text-black">Door Repair</option>
                    <option className="text-black">Faucet Replacement</option>
                    <option className="text-black">Toilet Replacement</option>
                    <option className="text-black">Light Fixture</option>
                    <option className="text-black">Ceiling Fan</option>
                    <option className="text-black">TV Mounting</option>
                    <option className="text-black">General Maintenance</option>
                    <option className="text-black">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Describe the Problem *</label>
                <textarea rows={4} className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="Please describe what needs to be repaired or fixed..." />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Preferred Date</label>
                  <input type="date" className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Urgency</label>
                  <select className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400">
                    <option className="text-black">Not urgent — within 2 weeks</option>
                    <option className="text-black">Soon — within a week</option>
                    <option className="text-black">Urgent — within 2-3 days</option>
                    <option className="text-black">Emergency — ASAP</option>
                  </select>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-300">I agree to be contacted regarding my service request.</label>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Submit Repair Request
              </button>
            </form>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4">Starting Prices</h2>
            <p className="text-xl text-gray-300 text-center mb-16">Transparent pricing — you receive a quote before work begins</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { service: "TV Mounting", price: "$100+" },
                { service: "Drywall Repair", price: "$100+" },
                { service: "Door Repair", price: "$100+" },
                { service: "Faucet Replacement", price: "$100+" },
                { service: "Ceiling Fan Installation", price: "$150+" },
                { service: "Toilet Replacement", price: "$175+" },
                { service: "Painting", price: "$250+" },
                { service: "Fence Repair", price: "$150+" },
                { service: "General Handyman", price: "$75+/hr" },
              ].map((item) => (
                <div key={item.service} className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex justify-between items-center border border-white/20">
                  <span className="font-semibold text-white">{item.service}</span>
                  <span className="text-blue-400 font-bold text-lg">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8 text-sm max-w-2xl mx-auto">Prices are estimates. Final pricing depends on scope, materials, labor, and complexity. Customers receive pricing before work begins.</p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">Contact us today and we'll find the right professional for your job.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+12092719068" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
                📞 Call (209) 271-9068
              </a>
              <a href="mailto:kwan2station@gmail.com" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 backdrop-blur-md text-gray-400 py-10 px-6 text-center border-t border-white/10">
          <p className="text-white font-bold text-xl mb-2">KWAN-2 Home Services</p>
          <p className="mb-2">Serving Merced, CA and surrounding communities</p>
          <p className="mb-2">📞 (209) 271-9068 | ✉️ kwan2station@gmail.com</p>
          <p className="text-sm">© 2025 KWAN-2. All rights reserved.</p>
        </footer>

      </div>
    </main>
  );
}