import logo from "../assets/logo.png"; // update path

export function Footer() {
  return (
    <footer className="bg-main text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white rounded-2xl p-1">
              <img
                src={logo}
                alt="Olympic Park Pharmacy logo"
                className="w-14 h-14 object-contain"
              />
            </div>

            <div>
              <span className="text-2xl font-extrabold text-left text-blue-100">Olympic Park Pharmacy</span>
              <p className="text-sm text-blue-100 text-left">
                Caring for your health, close to home.
              </p>
            </div>
          </div>

          <p className="max-w-md text-blue-100 text-sm leading-6 text-left">
            Your trusted local pharmacy for prescriptions, health consultations,
            medication support, Vaccination and friendly care.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-blue-100">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-blue-100">
            <li>Olympic Park Pharmacy</li>
            <li>Calgary, Alberta</li>
            <li>
              <a href="tel:+10000000000" className="hover:text-white">
                +1 (000) 000-0000
              </a>
            </li>
            <li>
              <a href="mailto:info@olympicparkpharmacy.com" className="hover:text-white">
                info@olympicparkpharmacy.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-100">
          <p>
            © {new Date().getFullYear()} Olympic Park Pharmacy. All rights reserved.
          </p>

          {/* <div className="flex gap-5">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}