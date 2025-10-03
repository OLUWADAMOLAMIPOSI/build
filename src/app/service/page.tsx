"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900">
       <header className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 px-6 py-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Ready to work together?
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            You’re looking for a reliable construction partner or you’re
            looking to take the next step in your career, we want to hear
            from you!
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 "></div>
          <img
            src="service.jpeg"
            alt="Construction"
            className="relative z-10 object-cover w-full"
          />
        </div>
      </div>
    </header>

      <section className="py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 shadow-lg hover:shadow-xl transition">
          <div className="mb-4 text-4xl">📐</div>
          <h3 className="font-semibold text-lg">Core Planning</h3>
          <p className="text-gray-500 mt-2">
            Strategic planning tailored for every project.
          </p>
        </div>
        <div className="p-6 shadow-lg hover:shadow-xl transition">
          <div className="mb-4 text-4xl">🏛️</div>
          <h3 className="font-semibold text-lg">Traditional Designs</h3>
          <p className="text-gray-500 mt-2">
            Blending heritage with modern architecture.
          </p>
        </div>
        <div className="p-6 shadow-lg hover:shadow-xl transition">
          <div className="mb-4 text-4xl">🧱</div>
          <h3 className="font-semibold text-lg">Quality Materials</h3>
          <p className="text-gray-500 mt-2">
            Using only durable, high-quality materials.
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Construction Services</h2>
            <ul className="space-y-4">
              <li className="font-medium border-l-4 border-yellow-500 pl-3 hover:text-yellow-500"> General Contracting
              </li>
              <li className="pl-3 font-medium border-l-4 border-yellow-500 hover:text-yellow-500">Construction Consultant</li>
              <li className="pl-3 font-medium border-l-4 border-yellow-500 hover:text-yellow-500">Metal Roofing</li>
              <li className="pl-3 font-medium border-l-4 border-yellow-500 hover:text-yellow-500">House Renovation</li>
              <li className="pl-3 font-medium border-l-4 border-yellow-500 hover:text-yellow-500">Green Building</li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="construction"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-3 rounded ">
              <h3 className="font-semibold">General Contracting</h3>
              <p className="text-sm">
                Managing commissioning and project closeout effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-gray-500">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">300+</h3>
          <p className="text-gray-500">Employees</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">21+</h3>
          <p className="text-gray-500">Projects in Progress</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-10">Exclusive Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Construction",
            "Project Development",
            "Interior Design",
            "Welding & Laser",
            "Architecture",
            "Real Estate",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow-md hover:shadow-xl transition rounded-lg "
            >
              <div className="text-3xl mb-4">🏗️</div>
              <h3 className="font-semibold text-lg">{service}</h3>
              <p className="text-gray-500 mt-2">
                Delivering custom solutions tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-yellow-00 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
        <p className="text-gray-800 mb-6">
          Let’s build something amazing. Reach out to start your project today.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
          <Link href="/contact"> Build a Project</Link>
        </button>
      </section>
    </main>
  );
}
