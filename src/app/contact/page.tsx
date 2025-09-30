"use client";

import { useState } from "react";

export default function ContactQuotePage() {
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  // Mock submit for Request a Quote
  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSuccess(true);
    setTimeout(() => setQuoteSuccess(false), 3000); // auto hide
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => setContactSuccess(false), 3000); // auto hide
  };

  return (
    <main className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-gray-600 mt-3">
          Request a quote for your project or reach out with any questions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Request a Quote</h2>
          <form onSubmit={handleQuoteSubmit} className="space-y-5 text-black">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <select className="w-full p-3 border border-gray-300 rounded" required>
              <option value="">Select Service</option>
              <option>Construction</option>
              <option>Renovation</option>
              <option>Architecture</option>
              <option>Consulting</option>
            </select>
            <textarea
              placeholder="Project Details"
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded font-semibold hover:bg-yellow-600 transition"
            >
              Get a Quote
            </button>
          </form>
          {quoteSuccess && (
            <p className="mt-4 text-green-600 font-semibold text-center">
              ✅ Your quote request has been submitted!
            </p>
          )}
        </div>

        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
          <form onSubmit={handleContactSubmit} className="space-y-5 text-black">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          {contactSuccess && (
            <p className="mt-4 text-green-600 font-semibold text-center">
              ✅ Your message has been sent successfully!
            </p>
          )}

          <div className="mt-8 text-gray-700 space-y-3">
            <p>
              📍 <span className="font-semibold">Office:</span> n0.8 orchad Street,
              Lagos, Nigeria
            </p>
            <p>
              📞 <span className="font-semibold">Phone:</span> +234 800 123 4567
            </p>
            <p>
              ✉️ <span className="font-semibold">Email:</span> buildprobusines@gmail.com
            </p>
            <p>
              🕒 <span className="font-semibold">Hours:</span> Mon – Fri, 9am – 6pm
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
