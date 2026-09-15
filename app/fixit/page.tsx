"use client";
import Link from "next/link";
import { useState } from "react";

export default function FixIt() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", address: "",
    propertyType: "Residential", service: "", description: "",
    date: "", urgency: "Not urgent — within 2 weeks",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/submit-repair", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen relative">
      <video autoPlay muted loop playsInline className="fixed inset-0 w-full h-full object-cover z-0">
        <source src="/store_page_video.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-black/60 z-0" />
      <div className="relative z-10">

        <nav className="bg-black/50 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">KWAN-2</Link>
            <a href="tel:+12092719068" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold">Call Now</a>
          </div>
        </nav>

        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white leading-tight mb-6">
                You Tell Us What's Wrong.<br />
                <span className="text-blue-400">We Find the Right Person to Fix It.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">Reliable home repair for Merced, CA</p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#request" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition">Request a Repair</Link>
                <a href="tel:+12092719068" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">Get a Quote</a>
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

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 mb-16">Simple, fast, and hassle-free</p>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { step: "1", icon: "📋", title: "Tell Us What's Wrong", desc: "Submit your repair request online or give us a call." },
                { step: "2", icon: "🔍", title: "We Find the Right Professional", desc: "We match your project with an appropriate local service professional." },
                { step: "3", icon: "✅", title: "Get It Fixed", desc: "We coordinate the service and keep you informed throughout." },
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

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our Services</h2>
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
          </div>
        </section>

        <section id="request" className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4">Request a Repair</h2>
            <p className="text-xl text-gray-300 text-center mb-12">Fill out the form and we'll be in touch shortly</p>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-400 rounded-2xl p-10 text-center">
                <p className="text-5xl mb-4">✅</p>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-gray-300">Thank you! We've received your request. A member of our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6 border border-white/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number *</label>
                    <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="(209) 555-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="john@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Property Address *</label>
                  <input required type="text" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="123 Main St, Merced, CA" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Property Type</label>
                    <select value={formData.propertyType} onChange={e => setFormData({...formData, propertyType: e.target.value})} className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400">
                      <option className="text-black">Residential</option>
                      <option className="text-black">Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Service Needed</label>
                    <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400">
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
                  <textarea required rows={4} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="Please describe what needs to be repaired..." />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Preferred Date</label>
                    <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Urgency</label>
                    <select value={formData.urgency} onChange={e => setFormData({...formData, urgency: e.target.value})} className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400">
                      <option className="text-black">Not urgent — within 2 weeks</option>
                      <option className="text-black">Soon — within a week</option>
                      <option className="text-black">Urgent — within 2-3 days</option>
                      <option className="text-black">Emergency — ASAP</option>
                    </select>
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50">
                  {loading ? "Sending..." : "Submit Repair Request"}
                </button>
              </form>
            )}
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Starting Prices</h2>
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
          </div>
        </section>

        <section className="py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">Contact us today and we'll find the right professional for your job.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+12092719068" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition">📞 Call (209) 271-9068</a>
              <a href="mailto:kwan2station@gmail.com" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">✉️ Email Us</a>
            </div>
          </div>
        </section>

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