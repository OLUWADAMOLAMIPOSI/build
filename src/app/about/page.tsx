
"Use client"

import Image from "next/image"
import Link from "next/link"
git add .
git commit -m " replaced <a> with Next.js <Link> in "
git push

const Aboutpage = () => {
  return (
    <div>
      <>
      <div
      className="h-100 bg-cover bg-no-repeat relative justify-center items-center flex bg-center"
      style={{ backgroundImage: "url('/aboutbg.jpg')" }}
      >
    <div className="absolute inset-0 bg-gradient-to-r  from-blue-900/80 to-blue-900/40"></div>
      <div className="relative z-10 text-center text-white flex flex-col items-center space-y-2 ">
        <h1 className="text-5xl font-bold">ABOUT US</h1> 
        </div>
         </div>
          <div className="flex flex-col md:flex-row justify-between items-center bg-white">
            <div className="flex flex-col items-start space-y-10 p-6 md:p-20 md:w-1/2">
              <h1 className="text-black font-bold text-5xl">WHO ARE WE??</h1>
              <p className="text-black">
                At BuildPro, we are more than builders—we are creators of lasting spaces.
                With a reputation for excellence and innovation, our company specializes
                in delivering high-quality construction solutions that meet the unique
                needs of every client.
              </p>
              <p className="text-black">
                From residential projects to large-scale commercial developments, we
                combine expert craftsmanship, modern technology, and sustainable practices
                to bring visions to life. Our team of skilled professionals is committed
                to safety, precision, and efficiency at every stage of the building
                process.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/team.jpg"
                alt="Team"
                className="h-[350px] md:h-[490px] p-6 md:p-10 border rounded-md border-blue-500"
              />
            </div>
          </div>

         <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">
          OUR TEAM
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          <div className="bg-white rounded-lg shadow-lg p-6 text-center  transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/teamm1.jpeg"
              alt="Team Member 1"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700"> Gabriel Mendez</h3>
            <p className="text-gray-500">Project Manager</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center  transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/team2.jpeg"
              alt="Team Member 2"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">Michael Smith</h3>
            <p className="text-gray-500">Civil Engineer</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center  transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/team3.jpeg"
              alt="Team Member 3"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">Adelani Esooye</h3>
            <p className="text-gray-500">Architect</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center  transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/team6.jpeg"
              alt="Team Member 3"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">Ayaz Khan</h3>
            <p className="text-gray-500">Architect</p>
          </div>

           <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/team4.jpeg"
              alt="Team Member 3"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">Mark Scott</h3>
            <p className="text-gray-500">Architect</p>
          </div>

          
           <div className="bg-white rounded-lg shadow-lg p-6 text-center  transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/team5.jpeg"
              alt="Team Member 3"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">Opeyemi Waliu</h3>
            <p className="text-gray-500">Architect</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 text-center  bg-yellow-500">
        <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm  transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className=" text-xl mb-2 text-black font-bold ">Quality Work</h3>
            <p className="text-gray-600">We deliver durable and modern projects with precision.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm  transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className=" text-xl mb-2 text-black font-bold">Experienced Team</h3>
            <p className="text-gray-600">Our professionals bring years of expertise to every project.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm  transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl mb-2 text-black font-bold">Customer Focused</h3>
            <p className="text-gray-600">We prioritize client satisfaction and long-term relationships.</p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center text-black  bg-white">
        <h2 className="text-3xl font-bold">Let’s Build Together</h2>
        <p className="mt-4 max-w-xl mx-auto">
          Contact us today and let’s turn your construction ideas into reality.
        </p>
        <button className="mt-6 px-6 py-3  bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-400">
          <Link href="/contact">Get In Touch</Link>
        </button>
      </section>
      </>
    </div>
  )
}

export default Aboutpage
