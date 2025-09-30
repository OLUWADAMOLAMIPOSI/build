
const Footerpage = () => {
  return (
    <div>
         {/* ===== Footer ===== */}
      <footer className="bg-blue-900 text-gray-200 py-12">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-4">BuildPro</h3>
            <p>
              We deliver trusted construction services across Nigeria and beyond.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-yellow-400">About</a></li>
              <li><a href="/service" className="hover:text-yellow-400">Services</a></li>
              <li><a href="/project" className="hover:text-yellow-400">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Architecture</li>
              <li>Renovation</li>
              <li>Construction</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p>Lagos, Nigeria</p>
            <p>📞 +234 801 234 5678</p>
            <p>📧 buildprobusines@gmail.com</p>
          </div>
        </div>
        <p className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} BuildPro. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footerpage
