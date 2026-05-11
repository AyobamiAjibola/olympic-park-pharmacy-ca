import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo.png";
import { Clock, Heart, MapPin, Phone, Users } from "lucide-react";
import { address, directionsUrl, mapUrl, pharmacyName } from '@/constant/helper';

const aboutItem = [
  {
    icon: <Heart className="text-main" size={30} />,
    title: "Patient-Centered Care",
    desc: "We treat every patient as family, ensuring personalized attention and care."
  },
  {
    icon: <Users className="text-main" size={30} />,
    title: "Expert Team",
    desc: "Our qualified pharmacists provide professional guidance and support."
  }
]

export default function About() {

  return (
    <>
        <Helmet>
          <title>About us | Olympic Park Pharmacy</title>
          <meta
            name="description"
            content="Learn more about Olympic Park Pharmacy, our mission, location, and commitment to quality healthcare."
          />

          <meta
            name="keywords"
            content="Olympic Park Pharmacy, pharmacy, prescription refill, Calgary pharmacy, medication review"
          />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <section className="pb-10 lg:px-12 px-5 md:px-8 w-full bg-slate-50 ">
            <div className="flex flex-col justify-center items-center pt-15">
              <span className="inline-block text-3xl md:text-6xl font-bold text-main">
                About Us
              </span>
              <span className="inline-block text-sm md:text-lg font-normal text-slate-600">
                Committed to providing accessible, trusted, and <br/> community-focused healthcare services in Calgary.
              </span>

              <img
                src={logo}
                alt="Olympic Park Pharmacy logo"
                className="w-50 h-50 object-contain"
              />
            </div>
            
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="mt-6 text-lg text-slate-600 leading-8 text-justify">
                  At {pharmacyName}, Lorem ipsum dolor sit, amet consectetur 
                  adipisicing elit. Voluptatibus laborum temporibus, modi 
                  expedita rerum itaque laudantium incidunt, sapiente adipisci 
                  ut quo! Atque tempora illo aliquid aperiam quaerat quidem 
                  quae ipsum. adipisicing elit. Voluptatibus laborum temporibus, modi 
                  expedita rerum itaque laudantium incidunt, sapiente adipisci 
                  ut quo! Atque tempora illo aliquid aperiam quaerat quidem 
                  quae ipsum.adipisicing elit. Voluptatibus laborum temporibus, modi 
                  expedita rerum itaque laudantium incidunt, sapiente adipisci 
                  ut quo! Atque tempora illo aliquid aperiam quaerat quidem 
                  quae ipsum.adipisicing elit. Voluptatibus laborum temporibus, modi 
                  expedita rerum itaque laudantium incidunt, sapiente adipisci 
                  ut quo! Atque tempora illo aliquid aperiam quaerat quidem 
                  quae ipsum.adipisicing elit. Voluptatibus laborum temporibus, modi 
                  expedita rerum itaque laudantium incidunt, sapiente adipisci 
                  ut quo! Atque tempora illo aliquid aperiam quaerat quidem 
                  quae ipsum.adipisicing elit. Voluptatibus laborum temporibus, modi 
                  expedita rerum itaque laudantium incidunt, sapiente adipisci 
                  ut quo! Atque tempora illo aliquid aperiam quaerat quidem 
                  quae ipsum.adipisicing elit. Voluptatibus laborum temporibus, modi 
                  expedita rerum itaque laudantium incidunt, sapiente adipisci 
                  ut quo! Atque tempora illo aliquid aperiam quaerat quidem 
                  quae ipsum.adipisicing elit. Voluptatibus laborum temporibus, modi 
                  expedita rerum itaque laudantium incidunt, sapiente adipisci
                </p>

                <div className="flex flex-col gap-4 mt-4">
                  {/* Item 1 */}
                  {aboutItem.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      {/* Icon */}
                      <div className="flex items-center justify-center min-w-14 h-14 rounded-full bg-slate-100">
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col text-left items-start">
                        <span className="text-xl font-bold text-blue-900">
                          {item.title}
                        </span>

                        <p className="text-lg leading-tight text-slate-600 max-w-4xl">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden">
                <iframe
                  title="Olympic Park Pharmacy Location"
                  src={mapUrl}
                  className="h-112.5 w-full border-0 rounded-2xl"
                  loading="lazy"
                  allowFullScreen
                />

                <div className="mt-6 shadow-md border border-accent-grey bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-left" style={{ color: '#205090' }}>Visit Our Pharmacy</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-main mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">{address}</p>
                        <p className="text-sm text-gray-600">Sydney, NSW 2127</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-main mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-600">Call us anytime</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-main mt-1" />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">Mon-Fri: 9am-6pm</p>
                        <p className="text-sm text-gray-600">Sat: 9am-2pm, Sun: Closed</p>
                      </div>
                    </div>
                  </div>

                   <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-6 inline-flex items-center justify-center rounded-full bg-main px-6 py-3 text-white font-semibold hover:bg-main-light transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

            </div>
          </section>
          <Footer/>
        </div>
    </>
  )
}
