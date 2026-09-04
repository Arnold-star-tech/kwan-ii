import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">KWAN-2 FIX</h1>
          <div className="hidden md:flex gap-8 text-gray-600">
            <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
            <Link href="#how-it-works" className="hover:text-blue-600 transition">How It Works</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition">Pricing</Link>
            <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>
          <a href="tel:+12092719068" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold">
            Call Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              You Tell Us What's Wrong.<br />
              <span className="text-blue-600">We Find the Right Person to Fix It.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Reliable home repair and maintenance services for homeowners and property owners in Merced and surrounding communities.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="#request" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
                Request a Repair
              </Link>
              <Link href="#contact" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition">
                Get a Quote
              </Link>
            </div>
            <p className="mt-6 text-gray-500">📞 (209) 555-0000 — Available Mon–Sat</p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-10 text-center">
            <p className="text-6xl mb-4">🏠</p>
            <p className="text-2xl font-bold text-gray-800">Serving Merced, CA</p>
            <p className="text-gray-600 mt-2">and surrounding communities</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 mb-16">Simple, fast, and hassle-free</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: "1", icon: "📋", title: "Tell Us What's Wrong", desc: "Submit your repair request online or give us a call. Describe the problem and upload photos if you have them." },
              { step: "2", icon: "🔍", title: "We Find the Right Professional", desc: "We match your project with an appropriate local service professional who has the right skills and licensing." },
              { step: "3", icon: "✅", title: "Get It Fixed", desc: "We coordinate the service, keep you informed, and make the whole process simple from start to finish." },
            ].map((item) => (
              <div key={item.step} className="bg-blue-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 text-center mb-16">We coordinate a wide range of home repair and maintenance services</p>
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
              <div key={service.name} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-3">{service.icon}</div>
                <p className="font-semibold text-gray-800">{service.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">* Where California licensing is required, appropriately licensed professionals are used.</p>
        </div>
      </section>

      {/* Request Form */}
      <section id="request" className="py-20 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Request a Repair</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Fill out the form below and we'll be in touch shortly</p>
          <form className="bg-gray-50 rounded-2xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" placeholder="John Smith" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" placeholder="(209) 555-0000" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" placeholder="john@email.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Property Address *</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" placeholder="123 Main St, Merced, CA" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500">
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500">
                  <option>Select a service...</option>
                  <option>Drywall Repair</option>
                  <option>Painting</option>
                  <option>Door Repair</option>
                  <option>Faucet Replacement</option>
                  <option>Toilet Replacement</option>
                  <option>Light Fixture</option>
                  <option>Ceiling Fan</option>
                  <option>TV Mounting</option>
                  <option>General Maintenance</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Describe the Problem *</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" placeholder="Please describe what needs to be repaired or fixed..." />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Urgency</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500">
                  <option>Not urgent — within 2 weeks</option>
                  <option>Soon — within a week</option>
                  <option>Urgent — within 2-3 days</option>
                  <option>Emergency — ASAP</option>
                </select>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <label className="text-sm text-gray-600">I agree to be contacted regarding my service request.</label>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Submit Repair Request
            </button>
          </form>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Starting Prices</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Transparent pricing — you receive a quote before work begins</p>
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
              <div key={item.service} className="bg-white rounded-xl p-6 flex justify-between items-center shadow-sm">
                <span className="font-semibold text-gray-800">{item.service}</span>
                <span className="text-blue-600 font-bold text-lg">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm max-w-2xl mx-auto">Prices are estimates. Final pricing depends on scope, materials, labor, accessibility, and complexity. Customers receive pricing before work begins.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-blue-600 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us today and we'll find the right professional for your job.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+12092719068" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition">
              📞 Call (209) 271-9068
            </a>
            <Link href="#request" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
              Request a Repair
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-center">
        <p className="text-white font-bold text-xl mb-2">KWAN-2</p>
        <p className="mb-2">Serving Merced, CA and surrounding communities</p>
        <p className="text-sm">© 2025 KWAN-2. All rights reserved.</p>
      </footer>
    </main>
  );
}