"use client";

import { useState } from "react";
import Image from "next/image";

const WA_NUMBER = "923006917385";


export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-xs uppercase tracking-[0.15em] text-gray-500 text-center">Get in touch</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-2">Contact Us</h1>
      <p className="text-center text-gray-600 mt-3">Call, WhatsApp or email - a real person will respond.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          ["Phone / WhatsApp", "+92 300 6917 385", `https://wa.me/${WA_NUMBER}`, "Chat now"],
          ["Email", "zohair.shah8@gmail.com", "mailto:zohair.shah8@gmail.com", "Send email"],
          ["Visit us", "Shop No LG-9, Rehman Tower Main Market Gulberg II, Lahore", "https://maps.google.com/?q=Rehman+Tower+Gulberg+II+Lahore", "Open map"],
        ].map(([t, d, href, cta]) => (
          <a key={t} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="block bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <p className="font-bold text-[#114b2f]">{t}</p>
            <p className="mt-2 text-sm text-gray-700 break-words">{d}</p>
            <span className="inline-block mt-4 text-sm font-semibold text-[#114b2f] underline underline-offset-2">{cta}</span>
          </a>
        ))}
      </div>

      {/* Contact form */}
      <div className="mt-12 max-w-2xl mx-auto">
        <div className="relative bg-gradient-to-br from-white to-[#f4f9f6] border border-[#114b2f]/10 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(17,75,47,0.08)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#114b2f] via-green-500 to-[#114b2f]" />
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#114b2f]/5 blur-2xl" />
          <div className="relative">
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#114b2f] to-[#0b3a24] text-white shadow-lg mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
              <p className="text-sm text-gray-600 mt-2">We reply within one working day. Your message opens in WhatsApp.</p>
            </div>
            {sent ? (
              <div className="text-center py-10">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-[#114b2f] mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <p className="font-bold text-lg text-[#114b2f]">Message ready to send</p>
                <p className="text-sm text-gray-600 mt-2">Your message opened in WhatsApp. Press send there to deliver it.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">Your name</label>
                    <input
                      id="contact-name" name="name" type="text" required value={name}
                      onChange={(e) => setName(e.target.value)} placeholder="Your full name"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#114b2f] focus:ring-4 focus:ring-[#114b2f]/10 transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      id="contact-email" name="email" type="email" required value={email}
                      onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#114b2f] focus:ring-4 focus:ring-[#114b2f]/10 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    id="contact-message" name="message" required value={message}
                    onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what you need - products, quantities, delivery location..."
                    rows={5}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#114b2f] focus:ring-4 focus:ring-[#114b2f]/10 transition-all resize-none placeholder:text-gray-400"
                  />
                </div>
                <button type="submit" className="group w-full bg-gradient-to-r from-[#114b2f] to-[#0b3a24] text-white font-bold rounded-2xl py-4 hover:shadow-[0_12px_30px_rgba(17,75,47,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Send via WhatsApp
                </button>
                <p className="text-xs text-gray-500 text-center">No spam, no sharing. We only use your details to respond.</p>
              </form>
            )}
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mt-16">Our Team</h2>
      <p className="text-center text-gray-600 text-sm mt-2">Save our cards - reach out anytime for orders and quotations.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <figure className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="rounded-xl overflow-hidden">
            <Image src="/images/card-zohair.jpg" alt="Suheer Ahmed - Founder and Sales Manager" width={1600} height={912} className="w-full h-auto" />
          </div>
          <figcaption className="mt-4 text-center">
            <p className="font-bold text-lg">Suheer Ahmed</p>
            <p className="text-sm text-[#114b2f] font-semibold mt-1">Founder and Sales Manager</p>
            <a href="tel:+923006917385" className="inline-block mt-2 text-[#114b2f] font-semibold hover:underline">+92 300 6917 385</a>
          </figcaption>
        </figure>
        <figure className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="rounded-xl overflow-hidden">
            <Image src="/images/card-bilal.jpg" alt="Muhammad Bilal Shah Gilani - Business Development Officer" width={1600} height={900} className="w-full h-auto" />
          </div>
          <figcaption className="mt-4 text-center">
            <p className="font-bold text-lg">Muhammad Bilal Shah Gilani</p>
            <p className="text-sm text-[#114b2f] font-semibold mt-1">Business Development Officer</p>
            <a href="tel:+923171678829" className="inline-block mt-2 text-[#114b2f] font-semibold hover:underline">+92 317 1678829</a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
