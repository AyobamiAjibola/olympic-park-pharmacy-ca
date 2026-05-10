import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Helmet } from "react-helmet-async";
import {
  Mail, ShieldCheck,
  ClipboardCheck,
  Plane,
  Truck,
  Syringe,
  PillBottle,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "Rapid Strep Testing",
    description:
      "Quick and convenient strep testing with professional guidance from our pharmacy team.",
    icon: <ClipboardCheck size={22} />
  },

  {
    title: "Medication Reviews",
    description:
      "Personalized medication reviews to help you safely manage prescriptions and treatments.",
    icon: <ShieldCheck size={22} />
  },

  {
    title: "Travel Vaccines",
    description:
      "Stay protected while traveling with recommended vaccines and travel health advice.",
    icon: <Plane size={22} />
  },

  {
    title: "Free Delivery",
    description:
      "Convenient prescription delivery services to help you get your medications on time.",
    icon: <Truck size={22} />
  },

  {
    title: "Vaccinations & Immunizations",
    description:
      "Protect yourself and your family with routine and seasonal vaccination services.",
    icon: <Syringe size={22} />
  },

  {
    title: "Compliance Packaging",
    description:
      "Organized medication packaging designed to help you take medications correctly and on schedule.",
    icon: <PillBottle size={22} />
  }
];

type ServiceProp = {
  index: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ index, title, description, icon }: ServiceProp) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.3 }}
      className="h-full"
    >
      <div className="group flex h-full min-h-65 flex-col rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-slate-950">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Home | Olympic Park Pharmacy</title>
        <meta
          name="description"
          content="Olympic Park Pharmacy provides prescription support, health consultations, refills, appointment booking, and friendly pharmacy care."
        />
        <meta
          name="keywords"
          content="Olympic Park Pharmacy, pharmacy, prescription refill, Calgary pharmacy, medication review"
        />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <main>
          {/* Hero Section */}
          <section className="relative h-screen overflow-hidden">
            <Navbar />
            {/* Background Video */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/pharmacy-hero.jpg"
            >
              <source src="/pharmacy_vid.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Text Content */}
            <div className="lg:px-12 px-5 md:px-8 relative z-10 flex h-full items-center justify-center text-center">
              <div className="flex flex-col items-start w-full h-full">
                <span className="text-accent-grey w-58 mb-4 mt-14 inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-md">
                  Trusted Community Pharmacy
                </span>

                <span className="hidden md:block text-white text-4xl mt-6 font-bold leading-tight sm:text-5xl md:text-6xl text-left">
                  Welcome to Olympic Park <br/> Pharmacy
                </span>
                <span className="block md:hidden text-white text-4xl mt-6 font-bold leading-tight sm:text-5xl md:text-6xl text-left">
                  Welcome to Olympic Park Pharmacy
                </span>

                <p className="mt-6 text-lg leading-tight text-white md:text-xl text-left md:max-w-2xl font-light">
                  We make pharmacy care simple, accessible, and dependable. Whether you need prescriptions, medication guidance, or everyday pharmacy support, our team is here to help.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={() => {
                      document
                        .getElementById("prescription")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="cursor-pointer py-6 rounded-xl bg-main px-6 font-medium text-white shadow-lg transition hover:bg-main-light"
                  >
                    Transfer Prescription
                  </Button>

                  <Button 
                    onClick={()=>navigate('/contact')}
                    className="cursor-pointer py-6 rounded-xl border border-white/40 bg-white/10 px-6 font-medium text-white backdrop-blur-md transition hover:bg-white/20">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Prescription Section */}
          <section id="prescription" className="lg:px-12 px-5 md:px-8 relative overflow-hidden bg-linear-to-br from-emerald-50 via-white to-blue-50 py-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-7xl"
            >
            {/* <div className="mx-auto max-w-7xl"> */}
              <div className="mx-auto mb-12 max-w-3xl text-center">

                <span className="mt-5 text-4xl font-bold tracking-tight text-main sm:text-5xl">
                  Switching pharmacies made simple.
                </span>

                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Send us your details and our pharmacy team will help transfer your prescription safely and conveniently.
                </p>
              </div>

              <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                {/* Left Side */}
                <div className="relative">
                  <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

                  <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-main via-cyan-500 to-blue-500 p-8 text-white shadow-xl">
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                    <h3 className="text-2xl font-bold">
                      How it works
                    </h3>

                    <p className="mt-3 text-base leading-5 text-white/85">
                      We make the transfer process easy by contacting your current pharmacy and guiding you through the next steps.
                    </p>

                    <div className="mt-8 space-y-4">
                      {[
                        {
                          number: "1",
                          title: "Submit your request",
                          text: "Share your contact and current pharmacy details.",
                        },
                        {
                          number: "2",
                          title: "We handle the transfer",
                          text: "Our team contacts your pharmacy on your behalf.",
                        },
                        {
                          number: "3",
                          title: "Get notified",
                          text: "We’ll let you know when your medication is ready.",
                        },
                      ].map((step) => (
                        <div
                          key={step.number}
                          className="flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-bold text-emerald-600">
                            {step.number}
                          </div>

                          <div>
                            <h4 className="font-semibold">
                              {step.title}
                            </h4>

                            <p className="mt-1 text-sm leading-relaxed text-white/75">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-relaxed text-white/85 backdrop-blur-md">
                      Secure, confidential, and handled by our pharmacy team.
                    </div>
                  </div>
                </div>

                {/* Right Form */}
                <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-2xl md:p-8">
                  <div className="mb-8 text-center">
                    <h3 className="text-3xl font-bold text-gray-900">
                      Transfer your prescription
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl leading-relaxed text-gray-600">
                      Fill out the form below and we’ll contact you to assist with your prescription transfer.
                    </p>
                  </div>

                  <form className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="block text-left text-sm font-semibold text-gray-700">
                          Full name
                        </label>

                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-left text-sm font-semibold text-gray-700">
                          Phone number
                        </label>

                        <input
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 ">
                      <label className="block text-left text-sm font-semibold text-gray-700">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="john.doe@gmail.com"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="block text-left text-sm font-semibold text-gray-700">
                          Current Pharmacy
                        </label>

                        <input
                          type="text"
                          placeholder="Pharmacy name"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-left text-sm font-semibold text-gray-700">
                          Pharmacy phone
                        </label>

                        <input
                          type="tel"
                          placeholder="(555) 987-6543"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 ">
                      <label className="block text-left text-sm font-semibold text-gray-700">
                        Prescription Details
                      </label>

                      <textarea
                        rows={4}
                        placeholder="Medication names, prescription numbers or any additional information..."
                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-main focus:bg-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-main px-6 py-6 font-semibold text-white shadow-lg cursor-pointer transition hover:bg-main-light"
                    >
                      Submit Transfer Request
                    </Button>

                    {/* <div className="grid gap-3 pt-2 text-sm text-gray-600 sm:grid-cols-3">
                      <span>✓ Secure request</span>
                      <span>✓ Fast support</span>
                      <span>✓ Friendly team</span>
                    </div> */}

                    <p className="text-center text-xs leading-relaxed text-gray-500">
                      Please avoid sharing unnecessary sensitive medical information.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Services Preview */}
          <section className="bg-white lg:px-12 px-5 md:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-7xl"
            >
              <div className="text-center">
                <span className="mt-5 text-4xl font-bold tracking-tight text-main sm:text-5xl">
                  Pharmacy Services
                </span>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Helpful pharmacy services designed around your health needs.
                </p>
              </div>

              <Swiper
                spaceBetween={24}
                slidesPerView={1}
                keyboard={{ enabled: true }}
                navigation
                modules={[Navigation, Keyboard]}
                className="w-full pb-12 [&_.swiper-slide]:h-auto [&_.swiper-slide]:flex mt-10"
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 28,
                  },
                }}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={service.title} className="h-auto mb-12">
                    <ServiceCard index={index} {...service} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            <Button
              onClick={()=>navigate('/services')}
              className="bg-main px-6 py-6 font-semibold text-white shadow-lg cursor-pointer transition hover:bg-main-light"
            >
              View All Services
            </Button>
          </section>

          {/* Newsletter */}
          <section className="lg:px-12 px-5 md:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-emerald-950 p-8 text-center text-white shadow-2xl md:p-12"
            >
              {/* Glow Effects */}
              <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl" />

              {/* Content */}
              <div className="relative z-10">
                <Mail className="mx-auto mb-4 text-emerald-400" size={36} />

                <h2 className="text-3xl font-bold">
                  Get pharmacy updates and health reminders
                </h2>

                <p className="mt-3 text-slate-300">
                  Subscribe to receive helpful updates, announcements, and pharmacy news.
                </p>

                <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row mb-6">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="min-h-12 flex-1 rounded-full border border-white/10 bg-white px-5 text-slate-900 outline-none"
                  />

                  <button
                    type="submit"
                    className="rounded-full bg-main px-6 py-3 font-semibold text-white transition hover:bg-main-light cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-center text-xs leading-relaxed text-accent-grey">
                  No spam. You can unsubscribe anytime.
                </p>
              </div>
            </motion.div>
          </section>
        </main>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-105 hover:bg-green-600"
          aria-label="Chat on WhatsApp"
        >
          <img
            src='/whatsapp.svg'
            alt="chat on whatsapp"
            className='h-28 w-28'
          />
        </a>
        <Footer />
      </div>
    </>
  );
};

export default Index;