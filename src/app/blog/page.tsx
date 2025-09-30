"use client";

import { useState } from "react";

export default function BlogPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const posts = [
    {
      title: "Trends in Modern Architecture",
      img: "/blog1.jpeg",
      date: "Sept 15, 2025",
      excerpt: "Explore the innovative styles reshaping today’s skylines.",
      fullText: `
        Modern architecture today is shaped by minimalism, eco-friendly designs, and 
        technology-driven innovations. Cities are adopting glass facades, green rooftops, 
        and flexible workspaces that blend aesthetics with functionality. Beyond appearances, 
        there is a growing shift towards energy-efficient and adaptive structures, ensuring 
        buildings contribute positively to the environment. Architects are embracing 
        sustainability not just as a feature, but as the backbone of every design.
      `,
    },
    {
      title: "Why Quality Materials Matter",
      img: "/blog2.jpeg",
      date: "Sept 10, 2025",
      excerpt: "Using the right materials makes the difference between a lasting structure and a rebuild.",
      fullText: `
        Every structure begins with the quality of materials used in its foundation. 
        Low-grade materials compromise safety, durability, and cost-efficiency in the long run. 
        Builders today emphasize tested cement, steel reinforcement, and sustainable options 
        such as recycled wood or eco-bricks. Quality investments at the start ensure fewer 
        repairs, stronger performance, and improved property value for decades.
      `,
    },
    {
      title: "The Rise of Smart Buildings",
      img: "/blog3.jpeg",
      date: "Aug 30, 2025",
      excerpt: "How technology is redefining the way we design and use spaces.",
      fullText: `
        Smart buildings integrate sensors, automation, and real-time data to improve efficiency. 
        From automated lighting systems to energy monitoring dashboards, modern constructions 
        are being designed to think and adapt like living organisms. Homeowners enjoy 
        convenience while commercial spaces reduce costs and environmental impact. 
        This marriage of construction and tech is only set to grow in the coming years.
      `,
    },
    {
      title: "Cost-Saving Construction Practices",
      img: "/blog4.jpeg",
      date: "Aug 22, 2025",
      excerpt: "Learn how proper planning reduces waste and saves money.",
      fullText: `
        Construction is not only about creating buildings but doing so efficiently. 
        Strategic project planning, modular building techniques, and sourcing locally 
        available materials all contribute to cost savings. Lean construction practices 
        ensure minimal waste, while digital project management tools reduce delays. 
        In the end, efficiency in planning translates directly to profitability and client satisfaction.
      `,
    },
    {
      title: "Interior Design for Modern Homes",
      img: "/blog5.jpeg",
      date: "Aug 12, 2025",
      excerpt: "Simple, functional interiors are setting the tone for modern living.",
      fullText: `
        The modern homeowner values both aesthetics and comfort. Open floor plans, 
        natural lighting, and neutral tones are trending across residential interiors. 
        Multi-functional furniture and eco-friendly materials further support 
        sustainable living. A well-designed interior is not just visually appealing — 
        it also improves productivity, relaxation, and quality of life indoors.
      `,
    },
    {
      title: "Eco-Friendly Construction Techniques",
      img: "/blog6.jpeg",
      date: "Aug 02, 2025",
      excerpt: "Sustainability is no longer optional, it’s essential.",
      fullText: `
        Construction firms are increasingly adopting green practices. Techniques such as 
        rainwater harvesting, solar integration, and recycled materials have become mainstream. 
        Governments and clients alike are demanding projects that leave minimal carbon footprints. 
        In the coming years, sustainability will not just be an advantage, but a requirement 
        for every serious construction company.
      `,
    },
    {
      title: "Renovation vs. New Construction",
      img: "/blog7.jpeg",
      date: "Jul 25, 2025",
      excerpt: "Choosing between a renovation and a rebuild can be tricky.",
      fullText: `
        Renovations often cost less upfront but may be limited by structural constraints. 
        New constructions allow complete customization but require more resources and time. 
        The decision depends on client budgets, long-term plans, and property conditions. 
        Professionals often recommend assessing foundation strength before committing 
        to either option, ensuring value for investment.
      `,
    },
    {
      title: "Safety Standards in Construction",
      img: "/blog8.jpeg",
      date: "Jul 10, 2025",
      excerpt: "Safety is the backbone of every successful project.",
      fullText: `
        No matter the size of a project, safety remains a top priority. Proper use of 
        protective gear, regular equipment checks, and adherence to building codes 
        prevent accidents and ensure worker well-being. Training programs are also 
        critical, as they empower staff to identify risks early. A safe site is not only 
        ethical but also keeps projects on schedule and within budget.
      `,
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <main className="bg-white text-gray-900">

      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                {expandedPost === i && (
                  <div className="text-gray-700 mb-4 whitespace-pre-line">
                    {post.fullText}
                  </div>
                )}

                <button
                  onClick={() =>
                    setExpandedPost(expandedPost === i ? null : i)
                  }
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  {expandedPost === i ? "Show Less ↑" : "Read More →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 text-center bg-yellow-400 text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay in the Loop
        </h2>
        <p className="text-lg mb-6">
          Subscribe to get our latest blog posts straight to your inbox.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="max-w-md mx-auto flex gap-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <h3 className="text-xl font-bold mb-2">🎉 Successfully Subscribed!</h3>
            <p className="text-gray-600">
              Thank you for subscribing to our newsletter.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
