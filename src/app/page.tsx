// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <section
        id="home"
        className="relative bg-blue-900 text-white py-20 bg-cover bg-no-repeat  h-180"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="container mx-auto my-30 flex flex-col md:flex-row items-center px-14">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              We Build Great Projects
            </h2>
            <p className="mb-6 ">
              For many years we have been trusted by clients to deliver reliable,
              high-quality construction solutions. Let's bring your vision to life.
            </p>
            <div className="flex gap-4">
              <Link
                href="/about"
                className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-400"
              >
                Learn More
              </Link>
              <Link
                href="#quote"
                className="border border-yellow-500 text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-500 hover:text-blue-900"
              >
                Request A Quote
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt- style">
          </div>
        </div>
      </section>

      <section className="container mx-auto grid md:grid-cols-3 gap-6 py-16 px-4">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">
            Quality Construction
          </h3>
          <p>
            Delivering excellence in every detail with durable materials and expert
            workmanship.
          </p>
        </div>
        <div className="bg-yellow-500 text-blue-900 p-6 rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4">
            Professional Liability
          </h3>
          <p>
            Reliable, insured, and responsible services tailored to meet project
            needs.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">
            Dedicated To Clients
          </h3>
          <p>
            We prioritize client satisfaction, ensuring timely and cost-effective
            delivery.
          </p>
        </div>
      </section>

      <section
        id="about"
        className="container mx-auto grid md:grid-cols-2 gap-8 py-20 px-4"
      >
        <Image
          src="/p1.jpg"
          alt="Engineer"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h4 className="text-yellow-500 font-semibold uppercase mb-2">
            Welcome to BuildPro
          </h4>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            A Trusted Construction Company
          </h2>
          <p className="mb-6">
            Since 2000, we’ve been providing world-class construction services to
            clients across Nigeria. With a team of skilled professionals, we ensure
            that every project exceeds expectations.
          </p>
          <Link
            href="#services"
            className="bg-blue-900 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800"
          >
            Discover More
          </Link>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Providing Personalized and High Quality Services
        </h2>
        <Link
          href="/contact"
          className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-400"
        >
          Request A Quote
        </Link>
      </section>

      <section id="services" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Architecture", "Renovation", "Construction"].map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                  {service}
                </h3>
                <p>
                  We provide top-notch {service.toLowerCase()} solutions tailored to
                  your needs.
                </p>
                <Link
                  href="/service"
                  className="inline-block mt-4 bg-yellow-500 text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-400"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto grid md:grid-cols-2 gap-8 py-20 px-4">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Best Provider for Industrial Services
          </h2>
          <p className="mb-6">
            We provide trusted industrial solutions across the country. Our track
            record speaks volumes in delivering high-quality results.
          </p>
          <ul className="space-y-2">
            <li>✔ Over 1,323 projects completed</li>
            <li>✔ More than 1,505 happy customers</li>
          </ul>
        </div>
        <div>
          <Image
            src="/helmet.jpg"
            alt="Yellow helmet"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section id="projects" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Latest Projects</h2>
          <div className="grid md:grid-cols-3 gap-18">
            <div className="text-black bg-white rounded-lg shadow hover:shadow-lg overflow-hidden p-5">
              <img src="/pro1.jpg" alt="project" className="rounded-md "/>
              <h1 className=" mt-2 font-semibold text-blue-900">Student Hostel Construction Project</h1>
            </div>
            <div className="text-black bg-white rounded-lg shadow hover:shadow-lg overflow-hidden p-5">
              <img src="/pro3.jpg" alt="project" className="rounded-md "/>
              <h1 className=" mt-2 font-semibold text-blue-900">Retail Shopping Mall Project</h1>
            </div> 
             <div className="text-black bg-white rounded-lg shadow hover:shadow-lg overflow-hidden p-5">
              <img src="/pro6.jpg" alt="project" className="rounded-md "/>
              <h1 className=" mt-2 font-semibold text-blue-900">Government Administrative Office Building</h1>
            </div> 
             <div className="text-black bg-white rounded-lg shadow hover:shadow-lg overflow-hidden p-5">
              <img src="/pro9.jpg" alt="project" className="rounded-md "/>
              <h1 className=" mt-3 font-semibold text-blue-900">Industrial Warehouse Facility </h1>
            </div>
              <div className="text-black bg-white rounded-lg shadow hover:shadow-lg overflow-hidden p-5">
              <img src="/pro7.jpg" alt="project" className="rounded-md "/>
              <h1 className=" mt-2 font-semibold text-blue-900">Manufacturing Plant Building</h1>
            </div>
              <div className="text-black bg-white rounded-lg shadow hover:shadow-lg overflow-hidden p-5">
              <img src="/pro8.jpg" alt="project" className="rounded-md "/>
              <h1 className=" mt-3 font-semibold text-blue-900">Airport Terminal Building</h1>
            </div>
            
          </div>
        </div>
      </section>

      <section className="bg-yellow-500 text-blue-900 py-20 text-center">
        <h2 className="text-2xl font-bold mb-6">
          It’s always a joy to hear that the work we do has positively reviews
        </h2>
        <p className="italic">— Jeff Freshman, Client</p>
      </section>

      <section id="blog" className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Latest Blog Updates
        </h2>
            <div className="grid md:grid-cols-3 gap-18">
            <div className="text-black bg-white rounded-lg shadow hover:shadow-lg overflow-hidden p-5">
              <img src="/b1.jpg" alt="project" className="rounded-md "/>
              <h3 className="font-semibold text-blue-900 mb-2">
                    Best for any industrial & business solution
                  </h3>
                  <Link
                    href="/blog"
                    className="text-sm text-yellow-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
            </div>
             <div className="text-black bg-white rounded-lg shadow hover:shadow-lg overflow-hidden p-5">
              <img src="/b2.jpg" alt="project" className="rounded-md "/>
              <h3 className="font-semibold text-blue-900 mb-2">
                    Best for any industrial & business solution
                  </h3>
                  <Link
                    href="/blog"
                    className="text-sm text-yellow-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
            </div> 
            <div className="text-black bg-white rounded-lg shadow hover:shadow-lg overflow-hidden p-5">
              <img src="/b3.jpg" alt="project" className="rounded-md "/>
              <h3 className="font-semibold text-blue-900 mb-2">
                    Best for any industrial & business solution
                  </h3>
                  <Link
                    href="/blog"
                    className="text-sm text-yellow-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
            </div>
            </div>
      </section>
    </main>
  );
}
