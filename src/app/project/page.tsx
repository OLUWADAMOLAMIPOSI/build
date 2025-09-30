"use client";

export default function ProjectPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="py-16 px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/project1.jpeg"
            alt="Featured Project"
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Project: City Tower</h2>
            <p className="text-gray-600 mb-4">
              A landmark development in the heart of the city, combining modern design with
              sustainable practices. This project demonstrates our ability to deliver large-scale,
              complex builds on time and to the highest standard.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>🏗️ 20+ floors of premium office space</li>
              <li>🌱 Green building certification</li>
              <li>🕒 Completed in 18 months</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Project Gallery</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Residential Villas", img: "/project2.jpeg" },
            { title: "Corporate Offices", img: "/project3.jpeg" },
            { title: "Industrial Complex", img: "/project4.jpeg" },
            { title: "Shopping Mall", img: "/project5.jpeg" },
            { title: "Bridge Construction", img: "/project6.jpeg" },
            { title: "Renovation Works", img: "/project7.jpeg" },
          ].map((project, i) => (
            <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                height={400}
                width={400}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {["Planning", "Design", "Execution", "Delivery"].map((step, i) => (
            <div key={i} className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2">{step}</h3>
              <p className="text-gray-600">
                We ensure every {step.toLowerCase()} stage is handled with care and precision.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "James Carter",
              role: "CEO, Urban Developments",
              text: "Working with BuildPro was seamless. Their team exceeded our expectations at every stage.",
              img: "/t1.jpeg",
            },
            {
              name: "Sophia Martinez",
              role: "Homeowner",
              text: "They turned our dream home into reality with unmatched attention to detail.",
              img: "/t3.jpeg",
            },
            {
              name: "Michael Lee",
              role: "Project Manager",
              text: "Professional, efficient, and reliable. They delivered our project ahead of schedule.",
              img: "/t2.jpeg",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
